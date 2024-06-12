const Product = require("../models/product-model")
const asyncWrapper = require("../middleware/async")
const { createCustomError } = require("../errors/custom-error")

const getAllProducts = asyncWrapper(async (req, res) => {
 const product = await Product.find({})
 res.status(200).json({ product })
})

const createProduct = asyncWrapper(async (req, res) => {
 const product = await Product.create(req.body)
 res.status(200).json({ product })
})

const getProduct = asyncWrapper(async (req, res, next) => {
 const { id: productID } = req.params
 const product = await Product.findOne({ _id: productID })
 if (!product) {
  return next(createCustomError(`No task with id : ${productID}`, 404))
 }
 res.status(200).json({ product })
})

const patchProduct = asyncWrapper(async (req, res) => {
 const { id: productID } = req.params
 const product = await Product.findByIdAndUpdate(productID, req.body, {
  new: true,
  runValidators: true,
 })
 if (!product) {
  return next(createCustomError(`No task with id:${productID}`, 404))
 }
 res.status(200).json({ product })
})

const deleteProduct = async (req, res, next) => {
 const { id: productID } = req.params
 const product = await Product.deleteOne({ _id: productID })
 if (!product) {
  return next(createCustomError(`No task with id of:${productID}`, 404))
 }
 res.status(200).json({ product })
}

module.exports = {
 getAllProducts,
 createProduct,
 getProduct,
 deleteProduct,
 patchProduct,
}

//look at 3-task-manager
