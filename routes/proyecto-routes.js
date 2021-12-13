const express= require('express');
const req = require('express/lib/request');

const routes=express.Router();

const{
    getForm,
    addnewSocio  
}=require("../controllers/form-inscripcion");

routes.get('/rutas',(res,req)=>res.send("estoy conectando"));

module.exports=routes;

