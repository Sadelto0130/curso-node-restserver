const { response, request } = require('express');
const res = response;
const req = request;

const userGet = (req, res) => {

  const {q, nombre, apikey} = req.query;
  
  res.json({
    msg: 'get API - Controller',
    q, 
    nombre,
    apikey
  });
}

const userPost = (req, res) => {
  const nombre= req.body.nombre
  res.json({
    nombre
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