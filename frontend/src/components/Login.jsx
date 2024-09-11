import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
    <dialog id="login_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
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
        <button className='btn btn-secondary'>Login</button>
        <p>Not registered <Link to="/signup"><span className='text-pink-500 underline'>Signup</span></Link></p>
    </div>
  </div>
</dialog>
    </>
  )
}

export default Login
