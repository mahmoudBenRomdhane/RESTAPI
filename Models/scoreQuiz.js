const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scoreQuizSchema = new Schema({
    id_apprenant :{
        type : String ,
        required: true
    },
    id_quiz : {
        type : String ,
        required: true
    },
    note : {
        type : Number,
        required: true
    }
})
module.exports=mongoose.model('ScoreQuiz',scoreQuizSchema);