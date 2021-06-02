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