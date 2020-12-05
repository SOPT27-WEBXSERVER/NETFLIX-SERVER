const express = require('express');
const router = express.Router();

/* GET home page. */
router.use('/home', require('./home'));
router.use('/detail', require('./detail'));

module.exports = router;
