import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Update from './pages/Update'
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/" element={<Profile/>} />
                <Route path="/update" element={<Update/>} /> 
            </Routes>
        </BrowserRouter>
      </UserProvider>
        
    </div>
  )
}

export default App