const mongoose = require("mongoose");

// Todo {
//     titile : stirng ; 
//     description : String;
//     completed: boolean;
// }

mongoose.connect ("mongodb+srv://admin:1rzy7t5zEfdJ8gHW@cluster0.dkfoi6y.mongodb.net/todo") //will put this in .env file in production 

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed : Boolean,
})

const todo = mogoose.model('todos', todoSchema);
module.exports = {
    todo : todo //just 'todo' is also fine as key value pair is same
}