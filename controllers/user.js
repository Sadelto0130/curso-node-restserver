const bcryptjs = require('bcryptjs');
const { response, request } = require('express');
const res = response;
const req = request;

const Usuario = require('../models/usuario');

const userGet = (req, res) => {

  const {q, nombre, apikey} = req.query;
  
  res.json({
    msg: 'get API - Controller',
    q, 
    nombre,
    apikey
  });
}

const userPost = async(req, res) => {

  const {nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({nombre, correo, password, rol});

  //Encripta la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt); 

  //Guardar en BD
  await usuario.save();

  res.json({
    usuario
  });
}

const userPut = (req, res) => {
  const id = req.params.id
  res.json({
    msg: 'put API',
    id
  });
}

const userPatch = (req, res) => {
  res.json({
    msg: 'patch API'
  });
}

const userDelete = (req, res) => {
  res.json({
    msg: 'delete API'
  });
}

module.exports = controllers={
  userGet,
  userPost,
  userPut,
  userPatch,
  userDelete
}