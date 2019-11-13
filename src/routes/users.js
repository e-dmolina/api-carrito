const { Router } = require('express');
const router = Router();
const { getUsers, postUser, getuserById, putUser, deleteUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(postUser)
    

router.route('/:id')
    .get(getuserById)
    .put(putUser)
    .delete(deleteUser)

module.exports = router;