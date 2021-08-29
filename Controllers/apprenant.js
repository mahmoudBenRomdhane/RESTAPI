const Apprenant = require('../Models/apprenant')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
exports.addApprenant = (req, res, next)=>{
    let password = req.body.password;
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        const appre = new Apprenant({
            email : req.body.email ,
            username : req.body.username ,
            date_Forfait : req.body.date_Forfait ,
            password :hashedPassword,
            genre : req.body.genre,
            compteFacebook : req.body.compteFacebook,
            nom : req.body.nom ,
            prenom : req.body.nom
        })
        appre.save((err, doc)=>{
            if(!err){
                res.send(doc)
            }
            else{
                console.log('Error in save' + JSON.stringify(err, undefined, 2))
            }
        });
    })
}
exports.getEmails = (req,res, next)=>{
    Apprenant.find()
    .select('email')
    .then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.getSelectedapprenant = (req, res, next)=>{
    const _id = req.params._id
    Apprenant.findById({_id : _id},(err,data)=>{
        if(err){
            res.send('no data found')
        }else{
            res.send(data)
        }
    })
}
exports.connect = (req,res,next)=>{
    const email = req.body.email;
    const password = req.body.password;
    let loadeduser ;
    Apprenant.findOne({email: email})
    .then(user=>{
        if(!user){
            const error = new Error('A user with this email could not be found');
            error.statusCode = 401 ;
            res.json(error)
            throw error ;
        }
        loadeduser = user
        return bcrypt.compare(password,user.password)
    }) 
    .then(isEqual=>{
        if(!isEqual){
            const error = new Error('Wrong Password')
            error.statusCode = 401 ;
            throw error ;
        }
        const token = jwt.sign({
            email : loadeduser.email ,
            userId : loadeduser._id.toString()
        },'Keytaaserveurlezemikounitwil',
        {expiresIn:'4h'}
        )
        res.status(200).json({token : token ,userId : loadeduser._id.toString() })
    })
    .catch(err=>{
        console.log(err);
    })
}
exports.setForfait = (req, res, next)=>{
    const _id = req.body._id ;
    const forfait = req.body.forfait ;
    Apprenant.findByIdAndUpdate(_id,{
        date_Forfait : forfait
    }).then(res=>{
        console.log(res)
    })
}
exports.getApprenants = (req, res, next)=>{
    Apprenant.find()
    .then(resp=>{
        res.send(resp)
    }).catch(err=>{
        console.log(err)
    })
}
exports.deleteApprenant = (req, res, next)=>{
    const _id = req.params._id 
    Apprenant.findByIdAndRemove({_id : _id})
    .then(resp=>{
        console.log(resp)
    }).catch(err=>{
        console.log(err)
    })
}
exports.updateProfile = (req, res, next)=>{
    const _id = req.body._id
    bcrypt.hash(req.body.password,12)
    .then(hashedPassword=>{
        Apprenant.findByIdAndUpdate({_id},{
            password : hashedPassword
        }).then(res=>{
            console.log(res)
        })
    })
}
