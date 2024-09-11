import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <dialog id="login_modal" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className='space-y-3'>
        <span>Email</span> {errors.email && <span className="text-red-600 text-small float-end">*Email field is required</span>}
        <br />
        <input type="email" placeholder='Email' className='w-80 px-3 border  outline-none rounded-md' {...register("email", { required: true })}/>
    </div>
    <div className='space-y-3'>
        <span>Password</span> {errors.password && <span className="text-red-600 text-small float-end">*Password field is required</span>}
        <br />
        <input type="password" placeholder='Password' className='w-80 px-3 border  outline-none rounded-md' {...register("password", { required: true })} />
    </div>
    <div className="flex justify-between mt-5 items-center">
        <button className='btn btn-secondary' >Login</button>
        <p>Not registered <Link to="/signup"><span className='text-pink-500 underline'>Signup</span>
        </Link></p>
    </div>
    </form>
  </div>
</dialog>
    </>
  )
}

export default Login
