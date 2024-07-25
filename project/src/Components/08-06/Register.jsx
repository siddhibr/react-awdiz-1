import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Api from '../../axiosConfig'

const Register = () => {
  const router=useNavigate()
  const[userData, setUserData]=useState({
    name:"",
  email:"",
password:""
             })
        const [errors, setErrors] = useState([]);
        const [disable, setDisable] = useState(true);
         console.log(errors, "errors");
           
     async function handleChange(event){
      // console.log(event.target.value)
      setUserData({...userData,[event.target.name]:event.target.value})
     }       
     async function handleSubmit(e) {
      e.preventDefault();
      // api call to backend
      try {
        if (userData.name && userData.email && userData.password) {
            const response = await Api.post("/auth/register" , {userData});
          // const response = {
          //   data: { success: true, message: "Regsiter successfull." },
          // };
          if (response.data.success) {
            setUserData({
              name: "",
              email: "",
              password: "",
            });
            router("/login");
            toast.success(response.data.message);
          }
        } else {
          throw Error("All fields are mandatory.");
          // toast.error("All fields are mandatory.");
        }
      } catch (error) {
        console.log(error, "error");
        //   console.log(error);
        //   error =  { data : { success : false, message : "Password is invalid."}}
        toast.error(error.response.data.error);
      }
    } 
  
    useEffect(() => {
      const errorsArray = [];
      if (!userData.name) {
        errorsArray.push("Name is required.");
      }
      if (!userData.email) {
        errorsArray.push("Email is required.");
      }
      if (!userData.password) {
        errorsArray.push("Password is required.");
      }
      setErrors(errorsArray);
      if (errorsArray.length == 0) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }, [userData]);
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
        
        <input type='Submit' value="Register" /><br></br>
      </form>
      <button onClick={() => router("/login")}>Login ?</button>
      </div>
  )
}

export default Register