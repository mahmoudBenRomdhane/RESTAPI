const Responsable = require('../Models/Responsable')
const bcrypt = require('bcryptjs')

CreateRandomPassword = () =>{
 return Math.random().toString(36).slice(-8) ;
}


exports.GetResponsables=(req, res, next)=>{
    Responsable.find((err,data)=>{
        if(err){
            res.send('no Data found')
        }else{
            res.status(200).send(data)
        }
    })
}
exports.deleteResponsable=(req, res, next)=>{
    Responsable.findByIdAndRemove({_id:req.params._id})
    .then((ra)=>{
        res.send(ra);
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.addResponsable=(req, res, next)=>{
    /*if(!req.file){
        const error = new Error('no Image Provided');
        throw error ;
    }*/
    //const imageUrl = req.file.path
    let password = CreateRandomPassword() ;
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        const respo = new Responsable({
            nom : req.body.nom ,
            prenom : req.body.prenom ,
            email : req.body.email ,
            spécialite : req.body.spécialite ,
            numTelephone : req.body.numTelephone ,
            dateInscrption : new Date() , 
            password :hashedPassword,
            //imageProfil : imageUrl

        })
        respo.save((err, doc)=>{
            if(!err){
                res.send(doc)
            }
            else{
                console.log('Error in save'+ JSON.stringify(err, undefined, 2))
            }
        });
    })

    

}
exports.GetResponsable = (req, res, next)=>{
    const _id = req.params._id ;
    Responsable.findById({_id:_id},(err,data)=>{
        if(err){
            res.send('no Data Found')
        }else{
            res.send(data)
        }
    })
}