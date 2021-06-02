const express = require('express'); 
const quizController = require('../Controllers/quiz');
const router = express.Router();

router.post('/addQuiz',quizController.addQuiz);    // Ajouter Quiz
router.get('/quizList/:id_res',quizController.getQuiz) // list des  Quiz d'un responsable
router.delete('/deleteQuiz/:_id',quizController.deleteQuiz) // supprimer un Quiz
router.get('/quizLi/:_id',quizController.getSelectedQuiz) // lire une seule Quiz
router.post('/updateQuiz',quizController.updateQuiz) // update Quiz
router.get('/quizLi',quizController.getAllQuiz)
module.exports = router;