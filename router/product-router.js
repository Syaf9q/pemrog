const express = require('express');
const router = express.Router()

const {

} = require('../controller/product-controller')

router.route('/').get()
router.route('/:id').get()

module.exports = router