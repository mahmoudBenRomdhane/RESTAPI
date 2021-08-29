const Notification = require('../Models/Notification') 

exports.addNotification = (req, res, next)=>{
    const Notif = new Notification({
        id_utilisateur : req.body.id_utilisateur,
        contenu : req.body.contenu
    })
    Notif.save()
}
exports.getNotificationById = (req, res , next)=>{
    const id_utilisateur = req.params.id_utilisateur ;
    Notification.find({id_utilisateur : id_utilisateur},(err,data)=>{
        if(err){
            res.send("no Data found")
        }else{
            res.send(data)
        }
    })
}
exports.delete = (req, res , next)=>{
    Notification.findByIdAndRemove({ _id : req.params._id})
    .then((res)=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}