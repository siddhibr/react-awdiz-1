import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Api from "../axiosConfig";
import { AuthContext } from "../Components/Context/auth.context";

const LoginAdmin = () => {
  const { state, dispatch } = useContext(AuthContext);
  const router = useNavigate();
  const [AdminuserData, setAdminuserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);
  const [disable, setDisable] = useState(true);
//   console.log(errors, "errors");
//   console.log(userData, "userdata");
 function handlechange(event) {
    // console.log(event.target.value, event.target.name);
    setAdminuserData({ ...AdminuserData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (AdminuserData.email && AdminuserData.password) {
        const response=await Api.post("/admin/login-admin", {AdminuserData})
        // toast.success("Registration Successfull. Go for Login")
        // const response = {
        //   data: {
        //     success: true,
        //     message: "LOGIN Successfull.",
        //     userData: { name: "Abhi" },
        //   },
        // };

        if (response.data.success) {
          
          dispatch({ type: "LOGIN", payload: response.data.AdminuserData });
          setAdminuserData({ email: "", password: "" });
          router("/");
          toast.success(response.data.message);

        }
        else {
          toast.error(response?.data?.error)
          // console.log(response.data.error, "error")
        }
      } else {
        toast.error("All fields are mandatory");
      }
    } catch (error) {

      console.log(error,"loginerror")
      toast.error(error?.response?.data?.error)
    }
  }

  
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="">Email: </label>
        <br />
        <input
          type="email"
          onChange={handlechange}
          name="email"
          id=""
          value={AdminuserData.email}
        />{" "}
        <br />
        <label htmlFor="">Password: </label>
        <br />
        <input
          type="password"
          onChange={handlechange}
          name="password"
          id=""
          value={AdminuserData.password}
        />{" "}
        <br />
        {errors.length > 0 && (
          <div>
            {errors.map((error, i) => (
              <p key={i}>{error}* </p>
            ))}
          </div>
        )}
        <input type="submit" value="Login" /> <br />
      </form>
    </div>
  );
};

export default LoginAdmin;