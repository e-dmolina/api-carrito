const { Router } = require('express');
const router = Router();
const { getAddresses, postAddress } = require('../controllers/addresses.controler');

router.route('/')
    .get(getAddresses)
    .post(postAddress)



module.exports = router;