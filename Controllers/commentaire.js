const Commentaire = require('../Models/commentaire');

exports.addCommentaire = (req, res, next)=>{
    const c = new Commentaire({
        contenu : req.body.contenu ,
        id_apprenant : req.body.id_apprenant,
        id_sujet : req.body.id_sujet ,
        dateCommentaire : req.body.dateCommentaire
    })
    c.save()
}
exports.getCommmentairesBySujet = (req, res, next)=>{
    const id_sujet = req.params.id_sujet ;
    Commentaire.find({id_sujet:id_sujet},(err, data)=>{
        if(err){
            res.send('no Data found')
        }else{
            res.status(200).send(data)
        }
    })
}