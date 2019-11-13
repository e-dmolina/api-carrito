const usersCtrl = {};
const { User } = require('../database');
const bcrypt = require('bcrypt');

usersCtrl.getUsers = async (req, res) => {
    const lstUsers = await User.findAll();
    res.json(lstUsers);
};

usersCtrl.postUser = async (req, res) => {
    try {
        const { firstname,
            lastname,
            email,
            telephone,
            roleId } = req.body;

        const hash = await bcrypt.hash(req.body.pass, 12);

        const userCreated = await User.create({
            firstname,
            lastname,
            email,
            pass: hash,
            telephone,
            roleId
        });

        res.json(userCreated);

    } catch (error) {
        res.json({ message: error });
    }
};

usersCtrl.getuserById = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findOne({ where: { id: userId } });
        if (user) {
            res.json(user);
        } else {
            res.json({ message: `no se encontro ningun usuario con id ${userId}` })
        }
    } catch (error) {
        res.json({ message: error });
    }
};

usersCtrl.putUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const { firstname,
            lastname,
            email,
            telephone,
            roleId } = req.body;

        const hash = await bcrypt.hash(req.body.pass, 12);

        const nuevosDatos = {
            firstname,
            lastname,
            email,
            pass: hash,
            telephone,
            roleId
        };

        const user = await User.findOne({ where: { id: userId } });
        const userUpdated = await user.update(nuevosDatos);
        res.json(userUpdated);
    } catch (error) {
        console.log(error);
        res.json({ message: error.message });
    }

};

usersCtrl.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const userDeleted = await User.destroy({ where: { id: userId } });
        if (userDeleted) {
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.json({ message: `No existe ningun usuario con id ${userId}` })
        }
    } catch (error) {
        console.log(error);
        res.json({ message: error });
    }
};

module.exports = usersCtrl;