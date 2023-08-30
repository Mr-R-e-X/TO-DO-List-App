const express = require('express');

const router = express.Router();

const addTaskController = require('../controllers/addTaskController')

console.log('router loaded');

router.post('/add-todo', addTaskController.add_todo);

module.exports = router;