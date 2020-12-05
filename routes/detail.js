const express = require('express');
const router = express.Router();

const detailController = require('../controllers/detail');

router.get('/detail/series/:idx', detailController.getResult);
router.get('/detail/recommend/:idx', detailController.createUser);
router.get('/detail/actors/:idx', detailController.createUser);

module.exports = router;
