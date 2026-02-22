// importing the express 
const express = require('express');
const app = express();
app.use(express.json());

let todos = [
    { id: 1, title: "Learn Node", completed: false }
];

app.get('/',(req,res)=>{
    res.send('server is running ');
});
app.get('/home',(req,res)=>{
    res.send('server is running on home ');
});
app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1,
        title:    ,
        completed: false
    };

    todos.push(newTodo);
    res.json(newTodo);
});


// PUT update todo
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t =>     );

    if (!todo) {
        return res.send("Todo not found");
    }

    todo.title =     ;
    todo.completed =     ;

    res.json(todo);
});


// DELETE todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params);
    todos =      ;

    res.send("Todo deleted");
});
app.listen(3000,()=>{
    console.log("server is at localhost30000");
});

