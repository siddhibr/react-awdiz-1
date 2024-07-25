import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './Action';
const Todo1 = () => {
    const[alltodo, setAllTodos]=useState(0);
    const[todo, Settodo]=useState("");
    const todos= useSelector(state=> state.todos);
    const dispatch= useDispatch();

    const todoSubmit=()=>{

        if(todo!==""){
        dispatch(add(alltodo, todo))
        // setAllTodos(counter+1);
        Settodo("");
    }

    }

  return (
< >
<div className='box'>
    <div>
      <h1> ToDo List</h1>
      <input className='box-1' type="text" value={todo} onChange={(event)=>Settodo(event.target.value)} />
    </div><br></br>
    <button className='btn' onClick={todoSubmit}>Add Todo</button>

    <div>
        <p>
            {
                todos?.map((todo, index)=>(

                <div key={index}>
                    <p>{todo.task} </p>
                    {/* <button onClick={()=>dispatch(delet(todo))}>Delete</button> */}
                </div>
                ))
            }
        </p>
    </div>
    </div>
    </>
  )
}

export default Todo1