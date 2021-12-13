const express= require('express');


const routes=express.Router();

const{
    getForm,
    addnewSocio  
}=require("../controllers/form-inscripcion");

routes.get('/rutas',(res,req)=>res.send("estoy conectando"));
routes.post("/addInfo", addnewSocio);
routes.get('/formulario', getForm)


module.exports=routes;

