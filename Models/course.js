const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    nom : {
        type : String ,
        required : true 
    },
    Speciality : {
        type : String ,
        required : true
    },
    descrption_text : {
        type : String ,
        required : true 
    },
    descrption_video : {
        type : String ,
        required : false
    }
    ,
    image : {
        type : String ,
        required : true
    }
    ,
    chaptires : {
        type : [String],
        required : false
    },
    difficulty : {
        type : String ,
        required : true
    },
    id_responable :{
        type : String ,
        required : true
    },
    vue : {
        type : Number ,
        required : true ,
        default : 0
    }
})
module.exports=mongoose.model('Course',courseSchema);