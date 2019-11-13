const { Router } = require('express');
const router = Router();
const { getPaymentMethods, postPaymentMethod } = require('../controllers/paymentMethods.controller');

router.route('/')
    .get(getPaymentMethods)
    .post(postPaymentMethod)

module.exports = router;