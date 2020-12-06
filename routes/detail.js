const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail');

router.get('/series/:idx', detailController.getSeries);
//router.get('/recommend/:idx', detailController.createUser);
//router.get('/actors/:idx', detailController.createUser);

module.exports = router;
