const productsctrl = {};
const { Product } = require('../database');

productsctrl.getProducts = async (req, res) => {
    const lstProducts = await Product.findAll();
    res.json(lstProducts);
}

productsctrl.postProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const productCreated = await Product.create(newProduct);
        res.json(productCreated);
    } catch (error) {
        res.json({message:error});
    }
}

productsctrl.getProductById = (req, res) => res.json({ message: 'GET for id' });

productsctrl.putProduct = (req, res) => res.json({ message: 'PUT' });

productsctrl.deleteProduct = (req, res) => res.json({ message: 'DELETE' });

module.exports = productsctrl;