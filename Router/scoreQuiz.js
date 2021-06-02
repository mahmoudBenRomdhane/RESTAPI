const express = require('express'); 
const scoreQuizController = require('../Controllers/scoreQuiz');
const router = express.Router();

router.post('/addScore',scoreQuizController.addScore) // ajouter note
router.get('/played/:id_apprenant/:id_quiz',scoreQuizController.played)

module.exports = router;