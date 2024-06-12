const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "product name must be provided"],
 },
 price: {
  type: Number,
  required: [true, "product price must be provided"],
 },
 // rating: {
 //     type: Number,
 //     default: 0,
 // },
 createdAt: {
  type: Date,
  default: Date.now(),
 },
 quantity: {
  type: Number,
  // default: 0,
  // required: [true, "product quantity,must be provided"],
  min: 0,
  max: 10,
 },
 imgSrc: {
  type: String,
  default: "f1.jpg",
 },
})

module.exports = mongoose.model("Product", productSchema)
