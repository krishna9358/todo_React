const express = require ('express');
const {createTodo, updateTodo} = require('./type');
const app = express();
const port = process.env.port || 3000;

app.use(express.json());

// validating input title : sting , description : string;
app.post('/add', (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload) {
        res.status(400).json({
            error : "invalid input"
        });
        return;
    }
})


app.get('/', (req, res) => {});

app.put('/completed', (req, res) => {});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
