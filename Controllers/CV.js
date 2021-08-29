const CV = require('../Models/CV');
const cv = require('../Models/CV');

exports.addCv = (req, res, next)=>{
    const Cv = new cv({
        compteFacebook : req.body.compteFacebook ,
        compteGithub : req.body.compteGithub,
        compteLinkedin : req.body.compteLinkedin,
        experienceProffesionelle : req.body.experienceProffesionelle ,
        Competence : req.body.Competence ,
        id_demande : req.body.id_demande ,
        image : 'http://localhost:3000/images/'+req.file.filename
    })
    Cv.save()
    .then(ss=>{
        console.log(res)
    })
}
exports.GetCv = (req,res,next)=>{
    const _id = req.params._id ;
    CV.find({id_demande : _id},(err,data)=>{
        if(err){
            res.send('no Data found')
        }else{
            res.send(data)
        }
    })
}   
exports.deleteCv = (req, res,next)=>{
    const _id = req.params._id 
    CV.findByIdAndRemove({_id:_id})
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}