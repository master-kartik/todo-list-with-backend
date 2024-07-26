const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kochharkartik51:Kochharkartik51@cluster0.wtavrd4.mongodb.net/todos')
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const todo =  mongoose.model('todos', todoSchema)

module.exports = {
    todo
}