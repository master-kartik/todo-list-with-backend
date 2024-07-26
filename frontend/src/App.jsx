import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/todos')
    .then((res)=>{
      setTodos(res.data.todos)
    })
  }, [todos]);

  return (
    <>
      <CreateTodo/>
      <Todos todos={todos}/>
    </>
  )
}

export default App
