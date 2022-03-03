const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({}, { strict: false });
const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
