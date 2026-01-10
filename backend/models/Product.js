const mongoose = require('mongoose');
const LocalDB = require('../utils/LocalDB');

const useMongo = !!process.env.MONGODB_URI;
let Product;

if (useMongo) {
  // --- Mongoose Schema ---
  const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
    reservedStock: { type: Number, default: 0, min: 0 },
    category: { type: String, required: true, index: true },
    image: { type: String, required: true },
    images: [String],
    isFeatured: { type: Boolean, default: false },
    isNew: { type: Boolean, default: false },
    ratings: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 }
    }
  }, { timestamps: true });

  // Add text index for search
  productSchema.index({ name: 'text', description: 'text', category: 'text' });

  Product = mongoose.models.Product || mongoose.model('Product', productSchema);
} else {
  // --- LocalDB Implementation ---
  Product = new LocalDB('products', {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, min: 0 },
    reservedStock: { type: Number, default: 0, min: 0 },
    category: { type: String },
    image: { type: String },
    description: { type: String }
  });

  // Seed some initial data if empty (Optional, for instant usability)
  setTimeout(async () => {
    try {
      const count = await Product.countDocuments();
      if (count === 0) {
        // Basic initial seed
        const initialProducts = [
          {
            _id: "1",
            name: "Calm Lavender Bath Bomb",
            price: 899,
            stock: 50,
            reservedStock: 0,
            category: "bath-bombs",
            image: "/images/main/calm lavender.png",
            description: "Soothing lavender with chamomile for a restful soak"
          },
          {
            _id: "2",
            name: "Breathe Eucalyptus Bath Bomb",
            price: 949,
            stock: 50,
            reservedStock: 0,
            category: "bath-bombs",
            image: "/images/main/breath bath.png",
            description: "Eucalyptus and peppermint for clarity and refresh"
          },
          {
            _id: "3",
            name: "Glow Citrus Bath Bomb",
            price: 899,
            stock: 50,
            reservedStock: 0,
            category: "bath-bombs",
            image: "/images/main/Glow Citrus Bath Bomb.png",
            description: "Bright citrus with vitamin E for a mood lift"
          },
          {
            _id: "4",
            name: "Rose Comfort Bath Bomb",
            price: 999,
            stock: 50,
            reservedStock: 0,
            category: "bath-bombs",
            image: "/images/main/rose.png",
            description: "Soft rose and vanilla for gentle comfort"
          },
          {
            _id: "5",
            name: "Balance Green Tea Bath Bomb",
            price: 949,
            stock: 50,
            reservedStock: 0,
            category: "bath-bombs",
            image: "/images/main/green tea.png",
            description: "Green tea antioxidants for balanced skin"
          },
          {
            _id: "6",
            name: "Unwind Chamomile Bath Bomb",
            price: 899,
            stock: 50,
            reservedStock: 0,
            category: "bath-bombs",
            image: "/images/main/unvind.png",
            description: "Chamomile and calendula for calming downtime"
          }
        ];
        for (const p of initialProducts) {
          await Product.create(p);
        }
        console.log("LocalDB: Seeded initial products");
      }
    } catch (e) {
      console.error("LocalDB Seed Error:", e);
    }
  }, 1000);
}

module.exports = Product;