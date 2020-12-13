const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get('/', homeController.mainIdx);
router.get('/contents', homeController.getContents);

module.exports = router;
