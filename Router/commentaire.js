const express = require('express'); 

const CommentaireController = require('../Controllers/commentaire')

const router = express.Router();

router.post('/addcommentaire',CommentaireController.addCommentaire);
router.get ('/commentaires/:id_sujet',CommentaireController.getCommmentairesBySujet);

module.exports = router;