const ScoreQuiz = require('../Models/scoreQuiz')

exports.addScore = (req, res, next)=>{
    const sq = new ScoreQuiz({
        id_apprenant : req.body.id_apprenant,
        id_quiz : req.body.id_quiz,
        note : req.body.note
    })
    sq.save()
}
exports.played = (req, res, next)=>{
    
    ScoreQuiz.find({id_apprenant : req.params.id_apprenant , id_quiz : req.params.id_quiz },(err,data)=>{
        if(err){
            res.send("no Data found")
        }else{
            res.send(data[0])
        }
    })
}
exports.played_app = (req, res, next)=>{
    ScoreQuiz.find({id_apprenant : req.params.id_apprenant },(err,data)=>{
        if(err){
            res.send("no Data found")
        }else{
            res.send(data)
        }
    })
}
exports.delete = (req, res, next)=>{
    ScoreQuiz.findByIdAndRemove({ _id : req.params._id})
    .then((res)=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}