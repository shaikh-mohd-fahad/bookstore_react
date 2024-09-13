import React, { useEffect, useState } from 'react'
import Login from './Login';
import logo from "../../public/logo.png";
function Navbar() {

const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light")
const element=document.documentElement;
useEffect(()=>{
  if(theme==="dark"){
    element.classList.add("dark");
  localStorage.setItem("theme","dark");
  document.body.classList.add("dark");
  }
  else{
    element.classList.remove("dark");
  localStorage.setItem("theme","light");
  document.body.classList.remove("dark");
  }
});
  const navb=(
    <>
    
        <li><a href="/">Home</a></li>
        <li><a href="/course">Course</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/about">About</a></li>
        
    </>
  );
  return (
    <>
    <div className="navbar bg-pink-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {navb}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={logo}  className="h-[50px]"/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
          {navb}
      </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={()=>{document.getElementById("login_modal").showModal()}}>Login</a>
  </div>
        </div>
        <Login/>
    </>
  )
}

export default Navbar;
