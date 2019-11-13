const { Router } = require('express');
const router = Router();
const { getOrders, 
        getOrderById, 
        postOrder, 
        putOrder, 
        deleteOrder } = require('../controllers/orders.controller');

router.route('/')
    .get(getOrders)
    .post(postOrder)

router.route('/:id')
    .get(getOrderById)
    .put(putOrder)
    .delete(deleteOrder)

module.exports = router;