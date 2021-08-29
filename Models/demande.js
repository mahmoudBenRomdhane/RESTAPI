const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const demandeschema = new Schema({
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
    numTelephone :{
        type: Number ,
        required : true
    },
    dateDemande :{
        type : Date ,
        required : true,
        default : new Date()
    },
    specialite:{
        type : String,
        required : true
    }
})
module.exports=mongoose.model('Demande',demandeschema);