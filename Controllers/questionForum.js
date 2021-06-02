const questionForum = require('../Models/questionForum')

exports.addQuestionForum=(req, res, next)=>{
    const qf = new questionForum({
        contenu : req.body.contenu,
        id_apprenant : req.body.id_apprenant
    })
    qf.save()
}
exports.getQuestions = (req, res, next)=>{
    const page =  parseInt(req.query.page) 
    const limit = parseInt(req.query.limit)
    
    const startIndex = (page -1 ) *limit 
    const endIndex = page * limit

    questionForum.find()
    .then(resp=>{
        const result =  resp.slice(startIndex,endIndex)
        if(result.length === 0 ){
            res.send('empty')
        }
        else {
            res.send(result)
        }
    })
    
}
exports.getQuestion = (req,res,next)=>{
    const _id = req.params._id
    questionForum.findById({_id: _id},(err, data)=>{
        if(err){
            res.send('no data found')
        }else{
            res.status(200).send(data)
        }
    })
}