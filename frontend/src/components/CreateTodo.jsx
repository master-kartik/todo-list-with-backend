import React, { useState } from 'react'
import axios from 'axios'

const CreateTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div>
        <input type="text" placeholder='title'  onChange={(e)=>setTitle(e.target.value)}/>
        <input type="text" placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
        <button onClick={()=>{
            axios.post("http://localhost:3000/todo",{
                title:title,
                description:description,
                completed: false
            })
        }}>Add</button>
    </div>
  )
}

export default CreateTodo