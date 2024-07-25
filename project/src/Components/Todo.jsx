import React, { useState } from 'react'
import toast from 'react-hot-toast'


const Todo = () => {
    const[todo , SetTodo]=useState("")
    const[alltodo , SetAlltodo]=useState([])
    function handleChange(event){
         SetTodo(event.target.value)
         
    }
    function handleSubmit(){
        SetAlltodo([...alltodo,todo])
        SetTodo("")
        if(!(SetAlltodo)){
          toast.success("gggd")

        }else{
        toast.error("njdjk")
        }
    }
  return (
    <div>
        <h1>ToDo</h1>
        <input value={todo}  onChange={handleChange} /> <br />
        <button onClick={handleSubmit}>submit</button>
        {alltodo.map((todo , i)=>(
            <h1 key={todo}> {""}{i + 1}.{todo}</h1>
        ))}
    </div>
  )
}

export default Todo