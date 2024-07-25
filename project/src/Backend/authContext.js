import { act, createContext, useEffect, useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, user: action.payload };
    
    default:
      return state;
  }
}

const initialState = { user: null };
export const authcontext = createContext();

function MyContextProvider1({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

 
  return (
    <authcontext.Provider value={{ state, dispatch }}>
      {children}
    </authcontext.Provider>
  );
}

export default MyContextProvider1;