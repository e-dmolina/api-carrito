const orderDetailCtrl = {};
const { OrderDetail } = require('../database');

orderDetailCtrl.getOrderDetails = async (req, res) => {
    const lstOrderDetails = await OrderDetail.findAll();
    res.json(lstOrderDetails);
}

orderDetailCtrl.postDetail = async (req, res) => {
    try {
        const newOrderDetail = req.body;
        const OrderdetailCreate = await OrderDetail.create(newOrderDetail);
        res.json(OrderdetailCreate);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = orderDetailCtrl;