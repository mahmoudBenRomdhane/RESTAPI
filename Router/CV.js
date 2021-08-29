const express = require('express'); 
const cvController = require('../Controllers/CV');
const storage = require('../storage')
const router = express.Router();

router.post('/addCv',storage,cvController.addCv)
router.get('/getCv/:_id',cvController.GetCv)
router.delete('/deleteCv/:_id',cvController.deleteCv)
module.exports = router;