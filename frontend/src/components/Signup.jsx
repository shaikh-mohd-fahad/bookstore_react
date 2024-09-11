import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
function Signup() {
  return (
    <>
    <div className=" flex h-screen items-center justify-center ">
    <div class="w-96 shadow-md border p-5 rounded-md">
    <div class="flex justify-between">
        <h3 className="font-bold text-lg">Sign Up</h3>
        <Link to="/"><span>X</span></Link>
    </div>
    <div className='space-y-3'>
        <span>Username</span>
        <br />
        <input type="text" placeholder='Username' className='w-80 px-3 border  outline-none rounded-md' />
    </div>
    <div className='space-y-3'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Email' className='w-80 px-3 border  outline-none rounded-md' />
    </div>
    <div className='space-y-3'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Password' className='w-80 px-3 border  outline-none rounded-md' />
    </div>
    <div class="flex justify-between mt-5 items-center">
        <button className='btn btn-secondary'>Sign Up</button>
        <p>Already registered? <span className='text-pink-500' onClick={()=>{document.getElementById("login_modal").showModal()}}>Login</span></p>
    </div>
    </div>
    </div>
    <Login/>
    </>
  )
}

export default Signup
