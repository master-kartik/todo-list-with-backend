const express = require('express')
const app = express()
const cors = require('cors')
const {todo} = require('./db')
const {createTodo,updateTodo} = require('./types')
app.use(express.json())
app.use(cors())

app.get('/todos', async (req,res)=>{
    const todos = await todo.find({})
res.json({
     todos
    })
})
app.post('/todo',async (req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "todo created"
    })

})
app.put('/completed', async(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'wrong inputs'
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg: " updated successfully"
    })
})

app.listen(3000,()=>{console.log('listening at port 3000')})