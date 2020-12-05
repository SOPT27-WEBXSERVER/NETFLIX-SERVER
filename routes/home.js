const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get('/home', homeController.getResult);
router.get('/home/contents', homeController.createUser);

module.exports = router;
