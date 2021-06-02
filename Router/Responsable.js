const express = require('express');

const ResponsableController = require('../Controllers/Responsable')

const router = express.Router();

router.get('/ResponsablesAcademique',ResponsableController.GetResponsables);  // liste des responsables
router.delete('/ResponsablesAcademique/:_id',ResponsableController.deleteResponsable); // Supprimer Responsable
router.post('/addResponsable',ResponsableController.addResponsable); //Ajouter Responsable
router.get('/responsable/:_id',ResponsableController.GetResponsable)


module.exports = router;