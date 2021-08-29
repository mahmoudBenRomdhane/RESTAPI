const express = require('express'); 
const CourseController = require('../Controllers/course');
const course = require('../Models/course');
const storage = require('../storage')
const checkAuth = require('../middleware/check-auth')
const router = express.Router();

router.post('/addcourse',storage,CourseController.addCourse)   // add course 
router.get('/coursesList/:id_res',CourseController.getcoursesByRes) // list des cours d'un responsable
router.delete('/deleteCourse/:_id',CourseController.deleteCourse) // supprimer cour
router.get('/courseLi/:_id' ,CourseController.getCourse) //lire une seule cour
router.post('/updateCourse',CourseController.updateCourse) // update Course details ( sans image )
router.post('/updateCourseImage',storage,CourseController.updateCourseImage) //update Course Image
router.get('/courses',checkAuth,CourseController.getallCourses) // tous les Cours avec pagination
router.get('/courseCount',CourseController.getCount)
router.get('/recherche/:rech',CourseController.recherche)
router.get('/statsBestCourses',CourseController.getFirstFive)
router.get('/updatevue/:_id/:vue',CourseController.updateVu)

module.exports = router;