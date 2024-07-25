import React, { useEffect, useState } from 'react'
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import Api from "../axiosConfig";


const RegisterAdmin = () => {

    const router= useNavigate();
    const[AdminuserData, setAdminuserData]= useState({name: "", email: "", password: ""});
    const[errors, setErrors]=useState([]);
    const[disable, setDisable]=useState(true);
    function handlechange(event){

        // console.log(event.target.value, event.target.name);
        setAdminuserData({ ...AdminuserData, [event.target.name] : event.target.value});

    }

   async function handleSubmit(event){
        event.preventDefault();

        try{

            if(AdminuserData.name && AdminuserData.email && AdminuserData.password){
                // toast.success("Registration Successfull. Go for Login")
                const response= await Api.post("/admin/register-admin", {AdminuserData}); 
                if(response.data.success){
                    setAdminuserData({name:"", email: "", password: ""});
                    
                    toast.success(response.data.message);
                    router("/login-admin")
                }
                else{

                  toast.error(response?.data?.error)
                }
            }
            else{
                toast.error("All fields are mandatory")
            }
        }

        catch(error){

          console.log(error, "error");
          toast.error(error.response.data.error);

        }
    }

    

  return (
    
    <div> 
      <form action="" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="">Name: </label><br />
        <input type="text" onChange={handlechange} name="name"  value={AdminuserData.name} /> <br />
        
        <label htmlFor="">Email: </label><br />
        <input type="email" onChange={handlechange} name="email" value={AdminuserData.email}/> <br />
        <label htmlFor="">Password: </label><br />
        <input type="password" onChange={handlechange} name="password" value={AdminuserData.password}/> <br />
        {errors.length>0 && (

          <div>
            {errors.map((error, i)=> (

              <p key={i}>{error}* </p>
            ))}
          </div>
          
        )}
        <input type="submit" value="Register" /> <br />


      </form>
    </div>
  );
};

export default RegisterAdmin