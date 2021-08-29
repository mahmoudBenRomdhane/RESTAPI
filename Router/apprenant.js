const express = require('express');
const apprenantController = require('../Controllers/apprenant')

const router = express.Router();
router.post('/addapprenant',apprenantController.addApprenant) // Ajouter apprenant
router.get('/getEmails',apprenantController.getEmails)  // list des emails
router.get('/getApprenant/:_id',apprenantController.getSelectedapprenant) // get apprenant
router.post('/connectUser',apprenantController.connect)
router.post('/setForfait',apprenantController.setForfait)
router.get('/apprenants',apprenantController.getApprenants)
router.delete('/apprenant/:_id',apprenantController.deleteApprenant)
router.post('/updateApprenatProfile',apprenantController.updateProfile)
module.exports = router;