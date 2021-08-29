const SuperAdmin = require('../Models/superAdmin');
const bcrypt = require('bcryptjs') ;
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const superAdmin = require('../Models/superAdmin');
exports.login = (req, res, next)=>{
    const email = req.body.email;
    const password = req.body.password;
    let loadedAdmin ; 
    SuperAdmin.findOne({email: email})
        .then(admin=>{
            if(!admin){
                const error = new Error('An Admin with this email could not be found');
                error.statusCode = 401 ;
                throw error ;
            }
            loadedAdmin = admin ;
            return bcrypt.compare(password, admin.password);
        })
        .then(isEqual=>{
            if(!isEqual){
                const error = new Error('Wrong Password');
                error.statusCode = 401 ;
                throw error ;
            }
            const token = jwt.sign({
                email : loadedAdmin.email,
                adminId : loadedAdmin._id.toString()
            },'Keytaaserveurlezemikounitwil',
            {expiresIn:'1h'}
            );
            res.status(200).json({token : token ,adminId : loadedAdmin._id.toString() })
        })
        .catch(err=>{
            console.log(err);
        })
        
}
exports.sendEmail = (req, res, next)=>{
  const email = req.query.email
  let content = req.query.content
  let password = req.query.password
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: 'discite123@hotmail.com',
          pass: 'lldeskkkzdsd7822VF.SLZ '
        },
        tls: {
            rejectUnauthorized: false
        }
      });
      if(content === 'true'){
        
        content = 'welecom your are accepted your password is '+password+' '
      }
      else{
        content = 'no'
      }
      
      var mailOptions = {
        from: 'discite123@hotmail.com',
        to: email,
        subject: 'lldeskkkzdsd7822VF.SLZ',
        text: content
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      
}
exports.getAdmin = (req,res,next)=>{
  SuperAdmin.find()
  .then(resp=>{
    res.send(resp[0])
  }).catch(err=>{
    console.log(err)
  })
}
exports.updateProfile = (req, res, next)=>{
  const _id = "606902506ccff71ce4e294cf"
  bcrypt.hash(req.body.password,12)
  .then(hashedPassword=>{
      superAdmin.findByIdAndUpdate({_id},{
          password : hashedPassword
      }).then(res=>{
          console.log(res)
      })
  })
}