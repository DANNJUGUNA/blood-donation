import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center mt-16'>
      <div className='w-[600px] h-[450px] rounded-3xl bg-white flex flex-col items-center justify-center'>
        <p className='font-bold mb-2 text-2xl underline'>LOGIN</p>
       <form className='flex flex-col'>
        <label className='mb-2 mt-2 font-semibold'>Email</label>
        <input type="email" className=' h-9 rounded-lg p-3 border border-red-500 border-1 outline-none' placeholder='youremail@gmail.com' data-lpignore="true"/>
        <label className='mb-2 mt-2 font-semibold'>PassWord</label>
        <input type="password" className=' h-9 rounded-lg p-3 border border-red-500 outline-none' placeholder='password#####1233' data-lpignore="true"/>
        <a className='mb-2 mt-3 flex items-center justify-center text-red-500'>Forgot Password?</a>
        <button className='rounded-full bg-[#BF2222] mb-2 mt-2 font-semibold text-xl text-white'>Log In</button>
       </form>
       <p>Don't have an account? <a>create account</a></p>
      </div>
    </div>
  )
}

export default Login