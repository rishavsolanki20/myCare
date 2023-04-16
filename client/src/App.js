import React from 'react'
import './App.css'
import { BrowserRouter,Router,Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/User'
import Register from './Components/Pages/Register'
import Login from './Components/Pages/Login'
import home from './Components/Home/Home'
import { useSelector } from "react-redux";
import User from './Components/Main/User'
import Footer from './Components/Footer/Footer'



export default function App() {
  // const { loading } = useSelector((state) => state.alerts);
  return (
    <>
    <BrowserRouter>
   <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path="/user" element={<User />} />
          <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>} />
    </Routes>
    </BrowserRouter>

    <Footer/>
    {/* <Register/> */}
    </>
  )
}

