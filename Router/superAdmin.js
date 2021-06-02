const express = require('express'); 
const SuperAdminCon = require('../Controllers/superAdmin');

const router = express.Router();

router.post('/login',SuperAdminCon.login)

module.exports = router;