const express = require("express")
const router = express.Router()

const {
    getAllProducts,
    getProduct,
    createProduct,
    deleteProduct,
} = require("../controller/product-controller")

router.route("/").get(getAllProducts).delete(deleteProduct)
router.route("/:id").get(getProduct)

module.exports = router
