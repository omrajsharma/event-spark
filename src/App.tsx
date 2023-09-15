import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import EventDetail from './pages/EventDetail'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/event/:eventId' element={<EventDetail />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  )
}

export default App
