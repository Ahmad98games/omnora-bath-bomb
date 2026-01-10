const mongoose = require('mongoose');
const LocalDB = require('../utils/LocalDB');

const useMongo = !!process.env.MONGODB_URI;
let Order;

if (useMongo) {
  // --- Mongoose Schema ---
  const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Optional for guest
    orderNumber: { type: String, unique: true },
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: {
        street: String,
        city: String,
        postalCode: String,
        country: String
      }
    },
    items: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['INITIATED', 'pending', 'receipt_submitted', 'approved', 'processing', 'shipped', 'delivered', 'rejected', 'cancelled', 'whatsapp_initiated'],
      default: 'INITIATED'
    },
    paymentMethod: { type: String, default: 'cod' },
    paymentProof: { type: String }, // URL to receipt
    shippingFee: { type: Number, default: 0 }
  }, { timestamps: true });

  // Pre-save hook for Order Number
  orderSchema.pre('save', async function (next) {
    if (!this.orderNumber) {
      // Use timestamp + random for uniqueness in Mongo primarily
      const count = await mongoose.models.Order.countDocuments();
      this.orderNumber = `ORD${Date.now()}${count + 1}`;
    }
    next();
  });

  Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

} else {
  // --- LocalDB Implementation ---
  Order = new LocalDB('orders');

  Order.pre('save', async function (next) {
    if (!this.orderNumber) {
      const count = await Order.countDocuments();
      this.orderNumber = `ORD${Date.now()}${count + 1}`;
    }
    next();
  });
}

module.exports = Order;