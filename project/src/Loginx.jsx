import React, { useState } from 'react'
import toast from 'react-hot-toast'
// import { useNavigate } from 'react-router-dom'

const Loginx = () => {

    const [userData,setUserData]=useState({
        email:"",
        password:"",

    })
   async function handleChange(event){
        setUserData({...userData,[event.target.name]:event.target.value});
    }
    function handleSubmit(e){
         e.preventDefault()
         try{
            if(userData.email&&userData.password){
                const response= {data:{sucess:true,message:"login sucesssful"}}
                    if(response.data.sucess){
                      toast.success(response.data.message)
                    }
                        
                        
                
            }else{
                toast.error("all fields are requied.") 
            }

         }catch(error){
            //    console.log(error)
            toast.error(error.response.data.message)
         }
    }
  return (
    <div> 
        <h1>loginx</h1>
        <form onSubmit={handleSubmit}>
            <label>Email:</label><br></br>
            <input type='email' required onChange={handleChange} name='email'  /><br></br>
            <label>password</label><br></br>
            <input type='password' required onChange={handleChange} name='password'/><br></br>

            <input type='submit'/><br></br>
        </form>
        </div>
  )
}

export default Loginx