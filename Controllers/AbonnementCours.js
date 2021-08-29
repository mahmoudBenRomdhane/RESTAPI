const abonnementCours = require ('../Models/AbonnementCours')

exports.addAbonnement = (req, res, next)=>{
    const ac = new abonnementCours({
        id_apprenant : req.body.id_apprenant,
        id_Course : req.body.id_Course
    })
    ac.save()
}
exports.subscribed = (req, res, next)=>{
    
    abonnementCours.find({id_apprenant : req.params.id_apprenant , id_Course : req.params.id_Course },(err,data)=>{
        if(err){
            res.send("no Data found")
        }else{
            res.send(data[0])
        }
    })
}
exports.putNote = (req, res , next)=>{
    const _id = req.body._id
    const note = req.body.note 
    abonnementCours.findByIdAndUpdate(_id,{
        note : note
    })
    .then(resp=>{
        console.log(resp)
    }).catch(err=>{
        console.lof(err)
    })

} 
exports.putAvis= (req, res , next)=>{
    const _id = req.body._id
    const Avis = req.body.Avis 
    abonnementCours.findByIdAndUpdate(_id,{
        Avis : Avis
    })
    .then(resp=>{
        console.log(resp)
    }).catch(err=>{
        console.lof(err)
    })
}
exports.getAvis = (req, res, next)=>{
    const avisArray = []
    const id_Course = req.params.id_Course 
    abonnementCours.find({id_Course : id_Course})
    .then(resp=>{
        resp.forEach(ab=>{
            if(ab.Avis){
                avisArray.push(ab.Avis)
            }
        })
        res.send(avisArray)

    })
}
exports.checkCourses = (req, res, next)=>{
    const id_Course = req.params.id_Course
    abonnementCours.find({id_Course : id_Course})
    .then(resp=>{
        res.send(resp)
    }).catch(err=>{
        console.log(err)
    })
}
exports.getApprenant = (req ,res, next)=>{
    const id_apprenant =  req.params._id
    abonnementCours.find({id_apprenant : id_apprenant},(err,data)=>{
        if(err){
            res.send('no Data found')
        }else{
            res.status(200).send(data)
        }
    } )
}
exports.delete = (req, res, next)=>{
    abonnementCours.findByIdAndRemove({ _id : req.params._id})
    .then((res)=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}