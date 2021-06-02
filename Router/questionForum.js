const express = require('express'); 

const questionForumController = require('../Controllers/questionForum')

const router = express.Router();

router.post('/addQuestionForum',questionForumController.addQuestionForum); // tous les questions avec pagination
router.get('/getForum',questionForumController.getQuestions) //Ajouter Question
router.get('/question/:_id',questionForumController.getQuestion)

module.exports = router;