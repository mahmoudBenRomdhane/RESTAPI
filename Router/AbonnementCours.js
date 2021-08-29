const express = require('express');  
const AbonnementCoursController = require('../Controllers/AbonnementCours')
const router = express.Router();

router.post('/addAbonnement',AbonnementCoursController.addAbonnement) //Ajouter ab
router.get('/subscribed/:id_apprenant/:id_Course',AbonnementCoursController.subscribed) // verfier
router.post('/putNote',AbonnementCoursController.putNote) //note
router.post('/putAvis',AbonnementCoursController.putAvis) // avis
router.get('/getAvis/:id_Course',AbonnementCoursController.getAvis) //get Avis
router.get('/checkCourses/:id_Course',AbonnementCoursController.checkCourses)
router.get('/getApprenatCourses/:_id',AbonnementCoursController.getApprenant)
router.delete('/deleteCoursInfo/:_id',AbonnementCoursController.delete)

module.exports = router