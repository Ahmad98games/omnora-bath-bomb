const LocalDB = require('../utils/LocalDB');

// Initialize LocalDB for Orders
const Order = new LocalDB('orders');

// Pre-save hook for Order Number generation
Order.pre('save', async function (next) {
  if (!this.orderNumber) {
    const count = await Order.countDocuments();
    this.orderNumber = `ORD${Date.now()}${count + 1}`;
  }
  next();
});

module.exports = Order;