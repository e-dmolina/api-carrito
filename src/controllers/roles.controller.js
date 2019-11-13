const rolCtrl = {};
const { Rol } = require('../database');

rolCtrl.getRoles = async (req, res) => {
    const lstRoles = await Rol.findAll();
    res.json(lstRoles);
}

rolCtrl.postRol = async (req, res) => {
    const newRol = req.body;
    const rolCreated = await Rol.create(newRol);
    res.json(rolCreated);
}

module.exports = rolCtrl;