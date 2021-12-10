const databaseConnection=require('../../config/database');



const getForm= (req,res)=>{

    res.render('../views/page/formulario');
};


const addnewSocio =(req,res)=>{
    const {Nombreniño,NombreAdulto,Parentezco,CorreoElectronico,numeroWhatsApp, propuesta,anual,colonia}= req.body;
  
         databaseConnection.query('INSERT INTO pre-inscripcion(Nombreniño,NombreAdulto,Parentezco,CorreoElectronico,numeroWhatsApp, propuesta,anual,colonia)VALUES(?,?,?,?,?,?,?,?)',[Nombreniño,NombreAdulto,Parentezco,CorreoElectronico,numeroWhatsApp, propuesta,anual,colonia],(error,data)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/index')
        }
    });
   
   
  

    /*
    const producto = contenido de producto del formulario;
    const categoria = contendio de categoria del formulario;
    */

};



module.exports= {
  
    getForm,
    addnewSocio
};

