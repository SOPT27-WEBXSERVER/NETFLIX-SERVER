const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get('/:levelNum', homeController.getResult); //
router.post('/', homeController.createUser, userController.getScoreRate); // 유저 생성

module.exports = router;
