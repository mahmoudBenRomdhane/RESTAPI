const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const abonnementCoursSchema = new Schema({
    id_apprenant :{
        type : String ,
        required: true
    },
    id_Course : {
        type : String ,
        required: true
    },
    date : {
        type : Date ,
        required : true ,
        default : Date.now()  
    },
    note : {
        type : String ,
        required : false 
    },
    Avis :{
        type : String ,
        required : false
    }
})
module.exports=mongoose.model('AbonnementCours',abonnementCoursSchema);