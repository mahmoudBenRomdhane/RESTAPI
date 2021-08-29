const express = require('express'); 
const SuperAdminCon = require('../Controllers/superAdmin');

const router = express.Router();

router.post('/login',SuperAdminCon.login)
router.get('/send',SuperAdminCon.sendEmail)
router.get('/getAdmin',SuperAdminCon.getAdmin)
router.post('/updateAdminProfile',SuperAdminCon.updateProfile)
module.exports = router;