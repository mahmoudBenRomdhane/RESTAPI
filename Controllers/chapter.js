const chapter = require('../Models/chapter');

exports.addChapter = (req,res,next)=>{
    const chaptre = new chapter({
        nom : req.body.chapterName ,
        video : 'http://localhost:3000/images/'+req.file.filename ,
        document_text : req.body.chapterDescrption,
        id_course : req.body.id_course,
        chapitre_num: parseInt(req.body.chapterNumber)
    })
    chaptre.save();
}
exports.getCourseChapters = (req, res, next)=>{
    const id_course = req.params._id ;
    chapter.find({id_course : id_course},(err,data)=>{
        if(err){
            res.send('no Data Found')
        }else{
            res.status(200).send(data)
        }
    })
}
exports.deleteChapter = (req,res,next)=>{
    console.log(req.params._id)
    chapter.findByIdAndRemove({_id : req.params._id})
    .then((res)=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
