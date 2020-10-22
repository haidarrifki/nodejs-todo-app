const express = require('express');
const router = express.Router();

const todoHandler = require('../handlers/todo');

// Routing yang mengarah ke http://localhost:1337/todos
router.route('/')
  .get(todoHandler.getAll)
  .post(todoHandler.create);

// Routing yang mengarah ke http://localhost:1337/todos/:id
router.route('/:id')
  .get(todoHandler.getOne)
  .put(todoHandler.update)
  .delete(todoHandler.delete);

module.exports = router;