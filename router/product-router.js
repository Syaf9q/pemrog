const express = require("express")
const router = express.Router()

const {
 getAllProducts,
 getProduct,
 createProduct,
 deleteProduct,
 patchProduct,
} = require("../controller/product-controller")

router.route("/").get(getAllProducts).post(createProduct)
router.route("/:id").get(getProduct).delete(deleteProduct).patch(patchProduct)

module.exports = router
