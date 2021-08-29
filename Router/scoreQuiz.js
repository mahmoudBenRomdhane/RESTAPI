const express = require('express'); 
const scoreQuizController = require('../Controllers/scoreQuiz');
const router = express.Router();

router.post('/addScore',scoreQuizController.addScore) // ajouter note
router.get('/played/:id_apprenant/:id_quiz',scoreQuizController.played) // played or not
router.get('/played/:id_apprenant',scoreQuizController.played_app) // list de quiz jouée par apprenant x
router.delete('/deleteScoreQuiz/:_id',scoreQuizController.delete)

module.exports = router;