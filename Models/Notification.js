const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Notificationschema = new Schema({
    id_utilisateur : {
        type:String ,
        required: true
    },
    contenu : {
        type : String,
        required: true
    },
    date_Notif : {
        type : Date ,
        required : true ,
        default : Date.now() 
    }
})
module.exports=mongoose.model('Notification',Notificationschema);