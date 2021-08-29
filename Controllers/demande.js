const demande = require('../Models/demande')

exports.addDemande = (req, res, next)=>{
    const Nd = new demande({
        nom : req.body.nom ,
        prenom : req.body.prenom,
        email : req.body.email,
        specialite : req.body.specialite,
        numTelephone : req.body.numTelephone
    })
    Nd.save()
    .then(resp=>{
        res.send(resp._id)
    }).catch(er=>{
        console.log(er)
    })
}
exports.getDemandes = (req ,res, next)=>{
    demande.find()
    .then(resp=>{
        res.send(resp)
    }).catch(err=>{
        console.log(err)
    })
}
exports.getDemande = (req, res, next)=>{
    const _id = req.params._id
    demande.findById({_id:_id},(err,data)=>{
        if(err){
            res.send('no data found')
        }else{
            res.send(data)
        }
    })
}
exports.deleteDemande = (req ,res, next)=>{
    demande.findByIdAndRemove({_id : req.params._id})
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}