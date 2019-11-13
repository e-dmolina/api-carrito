const ordersCtrl = {};
const { Order } = require('../database');

ordersCtrl.getOrders = async (req, res) => {
    const lstOrders = await Order.findAll();
    res.json(lstOrders);
};

ordersCtrl.postOrder = async (req, res) => {
    try {
        const newOrder = req.body;
        const orderCreated = await Order.create(newOrder);
        res.json(orderCreated);
    } catch (error) {
        res.json({message:error});
    }
};

ordersCtrl.getOrderById = (req, res) => res.json({ message: 'GET for id' });

ordersCtrl.putOrder = (req, res) => res.json({ message: 'PUT' });

ordersCtrl.deleteOrder = (req, res) => res.json({ message: 'DELETE' });

module.exports = ordersCtrl;