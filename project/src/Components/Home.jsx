import React, { useContext } from 'react'
import Api from '../axiosConfig';
import toast from 'react-hot-toast';
import { AuthContext } from './Context/auth.context';
import { useNavigate } from 'react-router-dom';




const Home = () => {
  const {state,dispatch}=useContext(AuthContext);
const router=useNavigate()
async function handleLogout() {
  
  try {
      const response = await Api.post("/auth/logout");
      if (response.data.success) {
          dispatch({ type: "LOGOUT" });
          router("/login");
          toast.success(response.data.message);
      } else {
          toast.error("Logout failed.");
      }
  } catch (error) {
      toast.error("Failed to logout.");
  }
}
  
  return (
    <div>
      <h1>Home - {state?.user?.name}</h1>
      <button onClick={handleLogout} style={{width:"14%", height:"40px", fontSize:"20px",  color:"black", fontWeight:"700"}}>Logout</button><br/>
      
    </div>
  )
}

export default Home