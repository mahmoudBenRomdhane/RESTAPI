const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apprenantschema = new Schema({
    email : {
        type : String ,
        required: true
    },
    username : {
        type : String ,
        required: true
    },
    password : {
        type : String ,
        required : true
    },
    date_inscri : {
        type : Date,
        required : true,
        default : Date.now() 
    },
    date_Forfait : {
        type : Date,
        required : false
    },
    genre : {
        type : String,
        required : true
    },
    compteFacebook : {
        type : String ,
        required : false
    },
    nom : {
        type : String ,
        required: true
    },
    prenom : {
        type : String ,
        required: true
    }
})
module.exports=mongoose.model('Apprenant',apprenantschema);