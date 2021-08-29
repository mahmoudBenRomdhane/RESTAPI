const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cvschema = new Schema({
    compteFacebook : {
        type : String ,
        required: true
    },
    compteGithub : {
        type : String ,
        required: true
    },
    compteLinkedin : {
        type : String ,
        required: true
    },
    experienceProffesionelle : {
        type : String ,
        required: true
    },
    Competence : { 
        type : String ,
        required: true
    },
    id_demande : {
        type : String ,
        required: true
    },
    image : {
        type : String ,
        required: true
    }
    
}

)
module.exports=mongoose.model('Cv',cvschema);