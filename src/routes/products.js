const { Router } = require('express');
const router = Router();
const { getProducts,
        getProductById,
        postProduct, 
        putProduct, 
        deleteProduct } = require('../controllers/products.controller');

router.route('/')
    .get(getProducts)
    .post(postProduct)

router.route('/:id')
    .get(getProductById)
    .put(putProduct)
    .delete(deleteProduct)

module.exports = router;