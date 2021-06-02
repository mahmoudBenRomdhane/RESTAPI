const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quizschema = new Schema({
    name :{
        type : String ,
        required : true
    },
    Speciality:{
        type : String ,
        required : true
    },
    difficulty :{
        type : String ,
        required : true
    },
    time :{
        type : Number ,
        required : true
    },
    questions:{
        type : [{
            nomQuestion : String,
            CorrectAnswer : String ,
            WrongAnswer : String,
            AnotherWrongAnwer : String
        }] ,
        required : true
    },
    id_responable :{
        type : String ,
        required : true
    }
})
module.exports=mongoose.model('Quiz',quizschema);