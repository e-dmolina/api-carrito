const { Router } = require('express');
const router = Router();
const { getOrderDetails, postDetail } = require('../controllers/orderDetails.controller');

router.route('/')
    .get(getOrderDetails)
    .post(postDetail)

module.exports = router;