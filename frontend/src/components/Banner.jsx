import React from 'react'
import banner from "../../public/image/banner2.jpeg"
function Banner() {
  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div  className='w-full md:order-1 order-2 md:w-1/2 mt-12  md:mt-20'>
          <div className='space-y-6 md:space-y-8 '>
          <h1 className='font-bold text-4xl text-pink-300'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

            <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<button className="btn bg-pink-200">Secondary</button>
          </div>
          
        </div>
        <div className='w-full md:w-1/2 order-1 flex text-center justify-center align-middle'>
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149331952.jpg?t=st=1725735214~exp=1725738814~hmac=c3ec252b8343e373d31bbf413a976b4185277c7c39428dc369afd0fba96049e0&w=826" className='w-[500px] h-[500px]'/>
            {/* <img src="https://img.freepik.com/free-vector/hand-drawn-back-school-background_23-2148220123.jpg?t=st=1726164719~exp=1726168319~hmac=a5c3b07c755eb0bba512179b4f72f7e4f31ad4aacaa9e101068d7798293df197&w=740" className='w-[500px] h-[500px] mt-5'/> */}
        </div>
    </div>
    </>
  )
}

export default Banner
