import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
    </>
  )
}

export default App
