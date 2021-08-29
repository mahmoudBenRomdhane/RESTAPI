const express = require('express')

const demandeController = require('../Controllers/demande')

const router = express.Router();

router.post('/AddDemande',demandeController.addDemande)
router.get('/getDemandes',demandeController.getDemandes)
router.get('/getDemande/:_id',demandeController.getDemande)
router.delete('/demande/:_id',demandeController.deleteDemande)

module.exports=router