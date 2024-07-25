import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Reducer from './Components/15-06/Reducer';
import Login from './Components/08-06/Login';
import Register from './Components/08-06/Register';
import Loginx from './Loginx';
import Todo1 from './Components/redux/Todo1';
import UseCallbackComponent from './Components/29-06/UseCallbackComponent';
import UseMemoComponent from './Components/29-06/UseMemoComponement';
import Todo from './Components/Todo';
import UseRef from './Components/30-06/UseRef';
import UseRef2 from './Components/30-06/UseRef2';
import AllProducts from './AllProducts';
import Spotify from './Spotify';
import Cart from './Components/16-07/Cart';
import RegisterAdmin from './UserAdmin/RegisterAdmin';
import LoginAdmin from './UserAdmin/LoginAdmin';
import Addproduct from './Backend/AddProduct';
import Allproduct1 from './products/Allproduct1';
import Navbar from './21-07/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path ='/reducer' element={<Reducer/>}/>
        <Route path ='/login' element ={<Login/>}/>
        <Route path ='/register' element ={<Register/>}/>
        <Route path ='/loginx' element ={<Loginx/>}/>
        <Route path="Redux-todo" element={<Todo1/>}  />
        <Route path="/use-callback" element={<UseCallbackComponent />} />
        <Route path="/use-memo" element={<UseMemoComponent />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/Use-Ref" element={<UseRef />} />
        <Route path="/Use-Ref2" element={<UseRef2 />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/register-admin" element={<RegisterAdmin />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/add-product" element={<Addproduct />} />
        <Route path="/all-product1" element={<Allproduct1 />} />
        
        
      </Routes>
    </div>
  );
}

export default App;
