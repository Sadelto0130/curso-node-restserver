const Rol = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
  const existeRol = await Rol.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El rol: ${rol} no existe en la BD`);
  }
}

const existeEmail = async (correo = '') => {
  const email = await Usuario.findOne({ correo });

  if (email) {
    throw new Error(`El correo: ${correo}, ya esta en uso`);
  }
}
module.exports = {
  esRoleValido,
  existeEmail
}