const { Router } = require('express');
const { check } = require('express-validator');
//const { userGet, userPost, userDelete, userPut } = require('../controllers/user');
const controllersUser = require('../controllers/user');

const { esRoleValido, existeEmail } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router()

router.get('/', controllersUser.userGet);

router.post('/', [
  check('nombre', 'El nombre es obligatorio').notEmpty(),
  check('password', 'El password debe tener mas de 6 caracteres').isLength({ min: 6 }),
  //check('correo', 'El correo no es valido').isEmail(),
  check('correo').custom( existeEmail ),
  //check('rol', 'No es un rol válido').isIn(['ADMIN', 'USER']),
  check('rol').custom( esRoleValido ),
  validarCampos
], controllersUser.userPost);

router.put('/:id', controllersUser.userPut);

router.patch('/', controllersUser.userPatch);

router.delete('/:id', controllersUser.userDelete);

module.exports = router;