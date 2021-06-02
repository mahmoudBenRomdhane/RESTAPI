const quiz = require('../Models/quiz');

exports.addQuiz=(req, res, next)=>{
    const qui = new quiz({
        name : req.body.name,
        Speciality : req.body.Speciality,
        difficulty : req.body.difficulty,
        time : req.body.time,
        questions : req.body.questions,
        
    })
    qui.save();
}
exports.getQuiz=(req, res, next)=>{
    const id_res = req.params.id_res ;
    console.log(id_res)
    quiz.find({id_responable : id_res},(err,data)=>{
        if(err){
            res.send('no Data Found')
        }else{
            res.status(200).send(data)
        }
    })
}
exports.deleteQuiz=(req, res, next)=>{
    quiz.findByIdAndRemove({_id:req.params._id})
    .then((q)=>{
        res.send(q)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.getSelectedQuiz = (req, res, next)=>{
    const id_q = req.params._id
    quiz.findById({_id:id_q},(err, data)=>{
        if(err){
            res.send('no Data Found')
        }else{
            res.status(200).send(data)
        }
    })
}
exports.updateQuiz = (req, res, next)=>{
    const _id = req.body._id 
    quiz.findByIdAndUpdate(_id , {name : req.body.name,
        Speciality : req.body.Speciality,
        difficulty : req.body.difficulty,
        time : req.body.time,
        questions : req.body.questions,
 })
 .then(res=>{
     console.log(res);
 })
}
exports.getAllQuiz = (req, res, next)=>{
    const page =  parseInt(req.query.page) 
    const limit = parseInt(req.query.limit)
    
    const startIndex = (page -1 ) *limit 
    const endIndex = page * limit

    quiz.find()
    .then(resp=>{
        const result = resp.slice(startIndex,endIndex)
        if(result.length === 0 ){
            res.send('empty')
        }
        else {
            res.send(result)
        }
    })
}
/*   
name : req.body.name,
Speciality : req.body.Speciality,
difficulty : req.body.difficulty,
time : req.body.time,
questions : req.body.questions,
id_responable : req.body.id_responable
*/