import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className=" flex h-screen items-center justify-center ">
    <div className="w-96 shadow-md border p-5 rounded-md">
    <div className="flex justify-between">
        <h3 className="font-bold text-lg">Sign Up</h3>
        <Link to="/"><span>X</span></Link>
    </div>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className='space-y-3'>
        <span>Username</span>{errors.username && <span className="text-red-600 text-small float-end">*Username field is required</span>}
        <br />
        <input type="text" placeholder='Username' className='w-80 px-3 border  outline-none rounded-md' {...register("username", { required: true })}/>
    </div>
    <div className='space-y-3'>
        <span>Email</span>{errors.email && <span className="text-red-600 text-small float-end">*Email field is required</span>}
        <br />
        <input type="email" placeholder='Email' className='w-80 px-3 border  outline-none rounded-md' {...register("email", { required: true })}/>
    </div>
    <div className='space-y-3'>
        <span>Password</span>{errors.password && <span className="text-red-600 text-small float-end">*Password field is required</span>}
        <br />
        <input type="password" placeholder='Password' className='w-80 px-3 border  outline-none rounded-md' {...register("password", { required: true })}/>
    </div>
    <div className="flex justify-between mt-5 items-center">
        <button className='btn btn-secondary'>Sign Up</button>
        <p>Already registered? <span className='text-pink-500' onClick={()=>{document.getElementById("login_modal").showModal()}}>Login</span></p>
    </div>
    </form>
    </div>
    </div>
    <Login/>
    </>
  )
}

export default Signup
