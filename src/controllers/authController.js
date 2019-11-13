const { User } = require('../database');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    try {
        let { email } = req.body;
        let { pass } = req.body;

        const user = await User.findOne({ where: { email } });
       //verifico si el usuario existe
        if (user) {
            //verifico que el password sea correcto
            const match = await bcrypt.compare(pass, user.pass );
            if (match) {
                const payload = {
                    email: user.email,
                    name: user.name,
                    role: user.roleId
                }
                 //genero token
                jwt.sign(payload, process.env.SECRET_TOKEN, function(error, token) {
                    if (error) {
                        res.status(500).json({error});
                    } else {
                        res.json({token})
                    }
                })
            } else {
                res.json({message:'Password Incorrecto.'});
            }
        } else {
            res.json({ message: `no se encontro ningun usuario con el mail ${email}` })
        }
    } catch (error) {
        res.json({ message: error.message });
    }
}

module.exports = login;