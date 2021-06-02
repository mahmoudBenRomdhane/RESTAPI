const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionForumschema = new Schema ({
    contenu : {
        type : String  ,
        required : true 
    },
    id_apprenant : {
        type : String  ,
        required : true 
    },
    dateQuestion : {
        type : Date ,
        required : true,
        default : new Date()
    }
})
module.exports=mongoose.model('QuestionForum',questionForumschema);