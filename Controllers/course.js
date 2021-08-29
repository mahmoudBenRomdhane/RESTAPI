const course = require('../Models/course')

exports.addCourse=(req, res, next)=>{
    const cour = new course({
        nom : req.body.name ,
        image : 'http://localhost:3000/images/'+req.file.filename,
       Speciality : req.body.Speciality ,
       descrption_text : req.body.descrption_text ,
        difficulty : req.body.difficulty,
        id_responable : req.body.id_responable
    })
    cour.save()
    .then(ss=>{
        res.send(ss._id)
    })
}
exports.getcoursesByRes=(req, res, next)=>{
    const id_res = req.params.id_res ;
    console.log(id_res)
    course.find({id_responable : id_res},(err,data)=>{
        if(err){
            res.send('no Data Found')
        }else{
            res.send(data)
        }
    })
}
exports.deleteCourse=(req, res, next)=>{
    course.findByIdAndRemove({_id:req.params._id})
    .then((q)=>{
        res.send(q)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.getCourse = (req, res, next)=>{
    const _id = req.params._id
    course.findById({_id:_id},(err, data)=>{
        if(err){
            res.send('no Data Found')
        }else{
            res.status(200).send(data)
        }
    })
}
exports.updateCourse = (req, res, next)=>{
    const _id = req.body._id ;
    course.findByIdAndUpdate(_id,{
        nom : req.body.nom ,
        Speciality : req.body.Speciality ,
        descrption_text : req.body.descrption_text,
        difficulty : req.body.difficulty
    })
    .then((res)=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.updateCourseImage = (req, res, next)=>{
    const _id = req.body._id ;
    course.findByIdAndUpdate(_id,{
        image : 'http://localhost:3000/images/'+req.file.filename
    })
    .then((res)=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
exports.getallCourses = (req,res,next)=>{
    /*course.countDocuments({},(err, count)=>{
        res.json(count)
        next()
    })*/
    
    const page =  parseInt(req.query.page) 
    const limit = parseInt(req.query.limit)
    
    const startIndex = (page -1 ) *limit 
    const endIndex = page * limit
    course.find()
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
exports.getCount = (req, res, next)=>{
    course.countDocuments({},(err, count)=>{
        res.json(count)
    })
}
exports.recherche = (req,res,next)=>{
    rech = req.params.rech
    const array = []
    course.find()
    .then(resp =>{
        resp.forEach(cour=>{
            if(cour.nom.includes(rech)){
                array.push(cour)
            }
        })
        res.send(array)
    })
}
exports.getFirstFive = (req, res, next)=>{
    course.find()
    .then(result=>{
        result.sort((a,b)=>{
            if(a.vue > b.vue){
                return -1 
            }
            if(b.vue >a.vue){
                return 1 
            }
            else{
                return 0 
            }
        })
        
        res.send(result.slice(0,6))
    }).catch(err=>{
        console.log(err)
    })
}
exports.updateVu = (req, res, next)=>{
    const _id = req.params._id;
    newVue = parseInt(req.params.vue)
    course.findByIdAndUpdate(_id,{
        vue : newVue
    })
}
//array1.forEach(element => console.log(element));

/*   name: new FormControl(null),
image: new FormControl(null),
Speciality : new FormControl(null),
difficulty : new FormControl(null),
descrption_text : new FormControl(null) */