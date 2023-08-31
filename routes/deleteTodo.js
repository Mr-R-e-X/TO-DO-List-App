const express = require('express');

const router = express.Router();

const deleteTodoController = require('../controllers/deleteTodoController');

console.log('del router loaded');

router.get('/delete-task', deleteTodoController.delete);

module.exports = router;