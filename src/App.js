
import './App.css';
import Login from './Components/Login';
import Registration from './Components/Registration';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Dashboard from './Components/Dashboard';
import { useState } from 'react';
import ViewProduct from './Components/ViewProduct';
import Addproduct from './Components/Addproduct';
import UpdateProduct from './Components/UpdateProduct';
import Shared from './Components/Shared';


function App() {

  const[id,setId]=useState("");
  const[islogged,setIslogged]=useState(false);
  
  const getId=(i)=>{
  setId(i)
  
  }
  
  
  const login=()=>{
      setIslogged(true);
  }
  
  const logout=()=>{
      setIslogged(false)
  }



  return (

    <Router>
    <Routes>
    <Route path='/'>
    <Route index element={<Login  login={login}  getId={getId} />}/>
    <Route path='register' element={<Registration/>}/>
    

    <Route path='dashboard' element={<Shared id={id} />} >
    <Route index element={<Dashboard  id={id}/>}/>
    <Route path='addproduct' element={<Addproduct/>}/>
    <Route path='viewproduct' element={<ViewProduct/>}/>
    <Route path='updateproduct/:productid/:productname/:productprice/:quantity/:category' element={<UpdateProduct/>}/>
    </Route>  
    </Route>
  
    </Routes>  
    </Router>
  );
}

export default App;
