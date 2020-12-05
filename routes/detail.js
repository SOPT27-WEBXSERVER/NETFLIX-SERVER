const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail');

router.get('/:levelNum', detailController.getResult); //
router.post('/', detailController.createUser, detailController.getScoreRate); // 유저 생성

module.exports = router;
