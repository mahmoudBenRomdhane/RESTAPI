const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chapterSchema = new Schema({
    nom : {
        type : String ,
        required : true
    },
    document_text : {
        type : String ,
        required : true
    }
    ,
    video : {
        type : String ,
        required : true
    }
    ,
    type_chapitre : {
        type : String ,
        required : false
    }
    ,
    id_course : {
        type : String ,
        required : true
    },
    chapitre_num : {
        type : Number,
        required : true
    }

})
module.exports=mongoose.model('chapter',chapterSchema);