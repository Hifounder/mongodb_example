
const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
    name: {
        type: String,
    },
    done: {
        type: Boolean,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
