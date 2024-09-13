import React from 'react'
import {Route, Routes} from "react-router-dom"
import Home from './components/home/home'
import Course from './components/course/Courses'
import Signup from './components/signup'
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
