const express = require('express'); 
const chapterController = require('../Controllers/chapter')
const storage = require('../storageVideo')
const router = express.Router();

router.post('/addChapter',storage,chapterController.addChapter) // ajouter chapitre a un cours
router.get('/CourseChapters/:_id',chapterController.getCourseChapters) // get chapters by Course
router.delete('/deleteChapter/:_id',chapterController.deleteChapter) // suprimer chapitre


module.exports = router;