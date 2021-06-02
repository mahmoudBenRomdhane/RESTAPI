const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentaireschema = new Schema ({
    contenu : {
        type : String  ,
        required : true 
    },
    id_apprenant : {
        type : String  ,
        required : true 
    },
    id_sujet : {
        type : String ,
        required : true
    },
    dateCommentaire : {
        type : Date ,
        required : true,
    }
})
module.exports=mongoose.model('Commentaire',commentaireschema);