const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const responsableschema = new Schema({
    nom :{
        type:String ,
        required: true
    },
    prenom : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    spécialite: {
        type : String,
        required: true
    },
    numTelephone :{
        type: Number ,
        required : true
    },
    dateInscrption :{
        type : Date ,
        required : true,
        
    },
    imageProfil : {
        type : String , 
        required : false
    },
    password : {
        type : String,
        required : true  
    }

})
module.exports=mongoose.model('responsables',responsableschema);