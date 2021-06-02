const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const apprenantschema = new Schema({
    email : {
        type : String ,
        required: true
    },
    nom : {
        type : String ,
        required: true
    },
    password : {
        type : String ,
        required : true
    },
    type_Forfait : {
        type : String ,
        required : true 
    },
    date_inscri : {
        type : Date,
        default: Date.now 
    },
    date_Forfait : {
        type : String,
        required : false
    },
    genre : {
        type : String,
        required : true
    }
})
module.exports=mongoose.model('Apprenant',apprenantschema);