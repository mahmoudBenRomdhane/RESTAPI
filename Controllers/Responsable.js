const Responsable = require('../Models/Responsable')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

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
    let password = req.body.password
    bcrypt.hash(password,12)
    .then(hashedPassword=>{
        const respo = new Responsable({
            nom : req.body.nom ,
            prenom : req.body.prenom ,
            email : req.body.email ,
            specialite : req.body.spécialite ,
            numTelephone : req.body.numTelephone ,
            dateInscrption : new Date() , 
            password :hashedPassword,


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
exports.login = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    let loadedResponsable ; 
    Responsable.findOne({email: email})
        .then(responsable=>{
            if(!responsable){
                const error = new Error('An responsabale with this email could not be found');
                error.statusCode = 401 ;
                throw error ;
            }
            loadedResponsable = responsable ;
            return bcrypt.compare(password, responsable.password);
        })
        .then(isEqual=>{
            if(!isEqual){
                const error = new Error('Wrong Password');
                error.statusCode = 401 ;
                throw error ;
            }
            const token = jwt.sign({
                email : loadedResponsable.email,
                ResponsableId : loadedResponsable._id.toString()
            },'Keytaaserveurlezemikounitwil',
            {expiresIn:'1h'}
            );
            res.status(200).json({token : token ,ResponsableId : loadedResponsable._id.toString() })
        })
        .catch(err=>{
            console.log(err);
        })
        
}
exports.CheckPassword = (req, res, next)=>{
    const password = req.body.oldPassword
    const HashedPassword = req.body.HashedPassword
    bcrypt.compare(password,HashedPassword)
    .then(isEqual=>{
        if(!isEqual){
            console.log("kk")
            res.json({worked : 'false'})

        }else{
            res.json({worked : 'true'})
        }
    })
}
exports.updateProfile = (req, res, next)=>{
    const _id = req.body._id
    bcrypt.hash(req.body.password,12)
    .then(hashedPassword=>{
        Responsable.findByIdAndUpdate({_id},{
            password : hashedPassword
        }).then(res=>{
            console.log(res)
        })
    })
}