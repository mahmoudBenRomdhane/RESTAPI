const SuperAdmin = require('../Models/superAdmin');
const bcrypt = require('bcryptjs') ;
const jwt = require('jsonwebtoken');

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