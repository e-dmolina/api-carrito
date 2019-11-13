const { Router } = require('express');
const router = Router();
const { getRoles, postRol } = require('../controllers/roles.controller');

router.route('/')
    .get(getRoles)
    .post(postRol)

module.exports = router;