const mongoose = require('mongoose');
const LocalDB = require('../utils/LocalDB');
const bcrypt = require('bcryptjs');

// Helper to determine mode
const useMongo = !!process.env.MONGODB_URI;

let User;

if (useMongo) {
  // --- Mongoose Implementation ---
  const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String },
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
    refreshToken: { type: String, select: false },
    addresses: [{
      street: String,
      city: String,
      postalCode: String,
      country: String
    }]
  }, { timestamps: true });

  // Hash password
  userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  });

  // Verify password
  userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  // Manage Refresh Token
  userSchema.methods.setRefreshToken = async function (token) {
    this.refreshToken = token;
    // We don't save here to allow atomic ops or bulk saves if needed, 
    // but typically we save immediately after.
    // For compatibility with controller:
    // Controller calls await user.setRefreshToken(...); await user.save();
    return;
  };

  userSchema.methods.verifyRefreshToken = async function (token) {
    return this.refreshToken === token;
  };

  userSchema.methods.clearRefreshToken = function () {
    this.refreshToken = null;
  };

  User = mongoose.models.User || mongoose.model('User', userSchema);

} else {
  // --- LocalDB Implementation ---
  User = new LocalDB('users', {
    firstName: { default: '' },
    lastName: { default: '' },
    email: { default: '' },
    role: { default: 'customer' },
    addresses: { default: [] }
  });

  User.pre('save', async function (next) {
    if (!this.password || (this.isModified && !this.isModified('password'))) {
      return next();
    }
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (error) {
      console.error('Password hashing error:', error);
      next();
    }
  });

  const originalWrap = User._wrapDocument.bind(User);
  User._wrapDocument = function (doc) {
    const wrapped = originalWrap(doc);
    wrapped.matchPassword = async function (enteredPassword) {
      return await bcrypt.compare(enteredPassword, this.password);
    };
    wrapped.setRefreshToken = async function (token) { this.refreshToken = token; };
    wrapped.verifyRefreshToken = async function (token) { return this.refreshToken === token; };
    wrapped.clearRefreshToken = function () { this.refreshToken = null; };
    return wrapped;
  };
}

module.exports = User;