import React, { createContext, useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import Vijay from './components/Vijay';
import Registration from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Errorpage from './components/Errorpage';
import { initialState, reducer } from './reducer/UseReducer';



//  1. Context API

export const UserContext = createContext();

const Routing = () =>{
  return (

<Routes>

<Route extact path='/' element={<Home />}/>
<Route path='/about' element={<About />}/>
<Route path='/contact' element={<Contact />}/>
<Route path='/login' element={<Login />}/>
<Route path='/signup' element={<Registration />}/>
<Route path='/logout' element={<Logout />}/>
{/* <Route path='/vijay' element={<Vijay />}/> */}
<Route path='*' element={<Errorpage/>}/>

</Routes>

  )}




const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
  <>
 <BrowserRouter>

 <UserContext.Provider value={{state , dispatch}}>

  <Navbar/>
  <Routing/>
 
  </UserContext.Provider>
 </BrowserRouter>
  </>  
    
  )
}

export default App