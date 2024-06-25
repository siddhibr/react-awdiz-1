import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Reducer from './Components/15-06/Reducer';
import Login from './Components/08-06/Login';
import Register from './Components/08-06/Register';
import Loginx from './Loginx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/reducer' element={<Reducer/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/register' element ={<Register/>}/>
        <Route path ='/loginx' element ={<Loginx/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
