import React from 'react'
import {Route, Routes,Navigate} from "react-router-dom"
import Home from './components/home/home'
import Course from './components/course/Courses'
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
function App() {
  const [authUser,SetAuthUser]=useAuth();
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={authUser?<Course/>:<Navigate to="/signup"/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
      <Toaster/>
    </>
  )
}

export default App
