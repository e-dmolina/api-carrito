const addressCtrl = {};

const { Address } = require('../database');

addressCtrl.getAddresses = async (req, res) => {
    const lstAddresses = await Address.findAll();
    res.json(lstAddresses);
}

addressCtrl.postAddress = async (req, res) => {
    try {
        const newAddress = req.body;
        const addressCreated = await Address.create(newAddress);
        res.json(addressCreated);
    } catch (error) {
        res.json({message:error});
    }
}

module.exports = addressCtrl;