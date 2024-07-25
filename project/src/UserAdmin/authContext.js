import { act, createContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

import Api from "../axiosConfig";

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

const initialState = { user: null };
export const Adminauthcontext = createContext();

function MyAdminContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getCurrentAdmin() {
    try {
      const response = await Api.get("/admin/get-current-admin");
      if (response.data.success) {
        dispatch({ type: "LOGIN", payload: response.data.AdminuserData });
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  }

  
  useEffect(() => {
    getCurrentAdmin();
    // alert("Page reloaded.");
    // // call another api to backend and use locally stored data.
    // retrive token from storage and send token to backend
    // token  decrypt -> userid
    // {name :"awdiz"}
    // dispatch({type :"LOGIN" , payload })
  }, []);

  return (
    <Adminauthcontext.Provider value={{ state, dispatch }}>
      {children}
    </Adminauthcontext.Provider>
  );
}

export default MyAdminContextProvider;