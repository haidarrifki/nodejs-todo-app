const express = require('express');
const router = express.Router();

const todoRoutes = require('./todo');

// Routing yang mengarah ke http://localhost:1337/
router.get('/', async (req, res) => {
  res
    .status(200)
    .json({ message: 'Hello World!' });
});
// Routing yang mengarah ke http://localhost:1337/todos
router.use('/todos', todoRoutes);

module.exports = router;