const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;

app.use(express.json());


app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if (!parsePayload.success){
        res.status(411).json({
            msg : "You sent wrong inputs",
        })
        return;
    }

    //mongo
   await todo.create({
        title : createPayload.title,
        description : createPayload.description,
        completed : false,

    })
    res.json({
        msg : "Todo Created",
    })

})

app.get('/todos', async (req, res) => {
    const todos = await todo.find({});
    res.json({todos})
})

app.put('/completed', async (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if (!parsePayload.success){ 
        res.status(411).json({
            msg: "You sent wrong inputs",
        })
        return;
    }
    await todo.update ({   // .update(where to update, what to update)
        _id : req.body.id,
    },{
        completed: true,
    })
    res.json({
        msg : "Todo marked as completed"
    })

})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
})


// body {
//    title : String;
//   description : string;
// }