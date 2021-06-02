const express = require('express');
const apprenantController = require('../Controllers/apprenant')

const router = express.Router();
router.post('/addapprenant',apprenantController.addApprenant) // Ajouter apprenant
router.get('/getEmails',apprenantController.getEmails)  // list des emails
router.get('/getApprenant/:_id',apprenantController.getSelectedapprenant) // get apprenant
router.post('/connectUser',apprenantController.connect)

module.exports = router;