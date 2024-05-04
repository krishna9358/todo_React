const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.mongoUrl;
mongoose.connect(url);

const todoSchema= mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean,
});

const todo = mongoose.model('todos', todoSchema);

module.exports = todo;