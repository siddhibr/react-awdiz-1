import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Register = () => {
  const[userData, setUserData]=useState({
    name:"",
  email:"",
password:""
             })
     async function handleChange(event){
      // console.log(event.target.value)
      setUserData({...userData,[event.target.name]:event.target.value})
     }       
     function handleSubmit(e){
      e.preventDefault()
      try{
        if(userData.name&&userData.email&&userData.password){
          //  const response = await axios.post("http://awdiz7/vp/user/register")
          const response ={data:{sucess:true,message:"registration sucessful"}}
           if(response.data.sucess){
            toast.success(response.data.message)

           }
        }else{
          toast.error('all fields are mandatory')
        }
        
      }

      catch(error){
        // console.log(error)
       toast.error(error.response.data.message)
        
      }

     } 
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label><br></br>
        <input type='text' required onChange={handleChange} name='name' /><br></br>
         <label>
          Email:
         </label><br></br>
         <input type='text' required onChange={handleChange} name='email'/><br></br>
         <label>Password:</label><br></br>
        <input type='password' onChange={handleChange} name='password'/><br></br>
        
        <input type='Submit' value="Login" /><br></br>
      </form>
      </div>
  )
}

export default Register