const express= require('express');
const app= express();
const path = require('path');

const databaseConnection = require('./config/database');


//coneccion con MySQL
databaseConnection.connect();

app.use(express.json());

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));


app.get('/index',(req,res)=>{
    res.render('./page/index');
    //res.send('index')
});


app.get('/index2',(req,res)=>{
    res.render('./page/index2')
});


app.get('/formulario',(req,res)=>{
    res.render('./page/formulario.ejs')})











app.listen(3000,()=>{
        console.log("Esta corriendo el server")
    })