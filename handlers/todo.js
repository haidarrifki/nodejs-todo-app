const modelTodo = require('../models/todo');

exports.getAll = async (req, res) => {
  try {
    const todos = await modelTodo.find();

    return res.json(todos);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

exports.getOne = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) {
      return res.status(422).json({ message: 'Parameter id tidak ditemukan.' });
    }
  
    const todo = await modelTodo.findOne({ _id: id });

    if ( ! todo) {
      return res.status(404).json({ message: 'Data tidak ditemukan.' });
    }
  
    return res.json(todo);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

exports.create = async (req, res) => {
  const { text, checked } = req.body;

  try {
    if (text === undefined || checked === undefined) {
      return res.status(422).json({ message: 'Parameter yang dimasukkan tidak lengkap.' });
    }
  
    const todo = await modelTodo.create({ text, checked });
  
    return res.status(201).json(todo);
  }
  catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, checked } = req.body;

    if (text === undefined || checked === undefined) {
      return res.status(422).json({ message: 'Parameter yang dimasukkan tidak lengkap.' });
    }

    const todo = await modelTodo.updateOne(
      {
        _id: id
      },
      {
        text,
        checked
      });

    if (todo.nModified === 0) {
      return res.status(404).json({ message: 'Data tidak ditemukan.' });
    }

    return res.json({ message: 'Sukses.' });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await modelTodo.deleteOne({ _id: id });

    console.log(todo);
    if (todo.deletedCount === 0) {
      return res.status(404).json({ message: 'Data tidak ditemukan.' })
    }

    return res.json({ message: 'Sukses.' });
  }
  catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}