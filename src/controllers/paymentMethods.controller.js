const paymentMethodCtrl = {};
const { PaymentMethod } = require('../database');

paymentMethodCtrl.getPaymentMethods = async (req, res) => {
    const lstPaymentMethods = await PaymentMethod.findAll();
    res.json(lstPaymentMethods);
}

paymentMethodCtrl.postPaymentMethod = async (req, res) => {
    try {
        const newPaymentMethod = req.body;
        const paymentMethodCreated = await PaymentMethod.create(newPaymentMethod);
        res.json(paymentMethodCreated);
    } catch (error) {
        res.json(error);
    }
}

module.exports = paymentMethodCtrl;