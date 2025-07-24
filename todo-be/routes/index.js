const express = require('express');
const router = express.Router();
const taskApi = require('./tasks.api');

router.use('/tasks',taskApi);


module.exports = router;