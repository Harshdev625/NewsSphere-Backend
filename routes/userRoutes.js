const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/createuser', userController.createUser)
.post('/login',userController.getUser);

module.exports = router;
