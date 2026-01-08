const fs = require('fs');
const path = require('path');
const logger = require('../services/logger');

class LocalDB {
    constructor(collectionName, schema = {}) {
        this.collectionName = collectionName;
        this.schema = schema;
        this.filePath = path.join(__dirname, `../data/${collectionName}.json`);
        this.data = [];
        this.hooks = { pre: {} };

        // Ensure data directory exists
        const dataDir = path.dirname(this.filePath);
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Load data
        this._load();
    }

    _load() {
        try {
            if (fs.existsSync(this.filePath)) {
                this.data = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
                // Convert date strings back to Date objects if needed
                this.data = this.data.map(item => this._deserialize(item));
            }
        } catch (error) {
            logger.error(`Failed to load local DB: ${this.collectionName}`, { error: error.message });
            this.data = [];
        }
    }

    _save() {
        try {
            fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2));
        } catch (error) {
            logger.error(`Failed to save local DB: ${this.collectionName}`, { error: error.message });
        }
    }

    _deserialize(item) {
        // Basic date restoration for common fields
        ['createdAt', 'updatedAt', 'deliveredAt', 'cancelledAt', 'whatsappSentAt'].forEach(field => {
            if (item[field]) item[field] = new Date(item[field]);
        });
        return item;
    }

    // --- Mongoose-like API ---

    async create(doc) {
        // Run pre-save hooks
        const context = { ...doc, constructor: this };
        if (this.hooks.pre['save']) {
            await this.hooks.pre['save'].call(context, () => { });
        }

        // Remove constructor from document to be saved
        const { constructor, ...docData } = context;

        // Apply Schema Defaults
        if (this.schema) {
            for (const [key, config] of Object.entries(this.schema)) {
                if (docData[key] === undefined && config.default !== undefined) {
                    docData[key] = config.default;
                }
            }
        }

        const newDoc = {
            _id: Math.random().toString(36).substr(2, 9), // Simple ID generation
            ...docData,
            createdAt: new Date(),
            updatedAt: new Date(),
            __v: 0
        };

        this.data.push(newDoc);
        this._save();
        return this._wrapDocument(newDoc);
    }

    async find(query = {}) {
        let results = this.data.filter(item => this._matches(item, query));

        // Return a chainable object for sort/limit/select
        const chain = {
            results,
            sort: (criteria) => {
                const [field, order] = Object.entries(criteria)[0];
                chain.results.sort((a, b) => {
                    if (a[field] < b[field]) return order === 1 ? -1 : 1;
                    if (a[field] > b[field]) return order === 1 ? 1 : -1;
                    return 0;
                });
                return chain;
            },
            populate: () => chain, // No-op for now
            select: () => chain,   // No-op for now
            then: (resolve) => resolve(chain.results) // Allow await
        };
        return chain;
    }

    async findById(id) {
        const doc = this.data.find(item => item._id === id);
        if (!doc) return null;
        return this._wrapDocument(doc);
    }

    async findOne(query) {
        const doc = this.data.find(item => this._matches(item, query));
        if (!doc) return null;
        return this._wrapDocument(doc);
    }

    async updateOne(query, update) {
        const doc = this.data.find(item => this._matches(item, query));
        if (!doc) return { n: 0, nModified: 0 };

        this._applyUpdate(doc, update);
        this._save();
        return { n: 1, nModified: 1 };
    }

    async findOneAndUpdate(query, update, options = {}) {
        let doc = this.data.find(item => this._matches(item, query));
        if (!doc) return null;

        this._applyUpdate(doc, update);
        if (options.new) {
            // Return modified document
        }
        this._save();
        return this._wrapDocument(doc);
    }

    async countDocuments(query = {}) {
        return this.data.filter(item => this._matches(item, query)).length;
    }

    // --- Helpers ---

    _matches(item, query) {
        for (const [key, value] of Object.entries(query)) {
            if (item[key] !== value) return false;
        }
        return true;
    }

    _applyUpdate(doc, update) {
        if (update.$set) Object.assign(doc, update.$set);
        if (update.$inc) {
            for (const [key, val] of Object.entries(update.$inc)) {
                doc[key] = (doc[key] || 0) + val;
            }
        }
        if (update.$unset) {
            for (const key of Object.keys(update.$unset)) {
                delete doc[key];
            }
        }
        doc.updatedAt = new Date();
    }

    _wrapDocument(doc) {
        // Add .save() method to document
        const self = this;
        return {
            ...doc,
            save: async function () {
                // Find and update in array
                const index = self.data.findIndex(i => i._id === this._id);
                if (index !== -1) {
                    self.data[index] = { ...this, updatedAt: new Date() };
                    self._save();
                }
                return this;
            },
            toObject: () => ({ ...doc })
        };
    }

    // --- Hooks ---
    pre(event, fn) {
        this.hooks.pre[event] = fn;
    }
}

module.exports = LocalDB;
