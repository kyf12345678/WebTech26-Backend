const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: String,
    dueDate: String,
    completed: Boolean
});

module.exports = mongoose.model('Todo', schema);