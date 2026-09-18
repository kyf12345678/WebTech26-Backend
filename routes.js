const express = require('express');
const router = express.Router();
const Todo = require('./models/todos');

// get all todos
router.get('/todos', async(req, res) => {
    const allTodos = await Todo.find();
    console.log(allTodos);
    res.send(allTodos);
});

// create a new todo
router.post('/todos', async(req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        dueDate: req.body.dueDate,
        completed: req.body.completed
    });

    await newTodo.save();
    res.send(newTodo);
});

// update a todo
router.put('/todos/:id', async(req, res) => {
    const updatedTodo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.send(updatedTodo);
});

// delete a todo
router.delete('/todos/:id', async(req, res) => {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);

    res.send(deletedTodo);
});

module.exports = router;