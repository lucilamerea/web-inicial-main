const express= require('express');

const routes=express.Router();

routes.get('/rutas', "estoy conectando");

module.exports=routes;

