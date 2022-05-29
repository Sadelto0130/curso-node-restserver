const { Router } = require('express');
//const { userGet, userPost, userDelete, userPut } = require('../controllers/user');
const controllersUser = require('../controllers/user')

const router = Router()

router.get('/', controllersUser.userGet);

router.post('/', controllersUser.userPost);

router.put('/:id', controllersUser.userPut);

router.patch('/', controllersUser.userPatch);

router.delete('/:id', controllersUser.userDelete);

module.exports = router;