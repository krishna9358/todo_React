const express = require ('express');
const {createTodo, updateTodo} = require('./type');
const todo = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.post('/add', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(400).json({
            error : "invalid input",
        });
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed : false,
    });
    res.json({message: "todo created successfully"});
})


app.get('/', async (req, res) => {
    const todos= await todo.find({});
    res.json({ todos });
});

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success) {
        res.status(400).json({
            error : "invalid input"
        });
        return;
    }
    await todo.update({
        _id : req.body.id,
    }, {completed : true,});
    res.json({message: "todo updated successfully"});

});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
