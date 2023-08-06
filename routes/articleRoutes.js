const express = require('express');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.get('/savedarticles', articleController.fetchAllarticles)
.post('/addarticle',articleController.addArticle)
.delete('/deletearticle/:id',articleController.deleteArticle)


module.exports = router;
