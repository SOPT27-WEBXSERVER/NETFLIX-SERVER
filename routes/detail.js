const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail');

router.get('/series/:idx', detailController.getSeries);
router.get('/recommend/:idx', detailController.getRecommendation);
router.get('/actors/:idx', detailController.getActors);

module.exports = router;
