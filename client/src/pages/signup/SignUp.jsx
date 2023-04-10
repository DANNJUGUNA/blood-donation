import React from 'react'
import MovingText from 'react-moving-text'

const SignUp = () => {
  return (
    <div className='flex items-center justify-center mt-16'>
      <div className='w-[600px] h-[500px] rounded-3xl bg-cyan-600 flex flex-col items-center justify-center shadow-xl shadow-black'>
        <p className='font-bold mb-2 text-2xl underline'>SIGN UP</p>
       <form className='flex flex-col'>
       <label className='mb-2 mt-2 font-semibold'>Firstname</label>
        <input type="text" className=' h-9 rounded-lg p-3 border border-red-500 border-1 outline-none' placeholder='firstname' data-lpignore="true"/>
        <label className='mb-2 mt-2 font-semibold'>Surname</label>
        <input type="text" className=' h-9 rounded-lg p-3 border border-red-500 border-1 outline-none' placeholder='surname' data-lpignore="true"/>
        <label className='mb-2 mt-2 font-semibold'>Email</label>
        <input type="email" className=' h-9 rounded-lg p-3 border border-red-500 border-1 outline-none' placeholder='youremail@gmail.com' data-lpignore="true"/>
        <label className='mb-2 mt-2 font-semibold'>PassWord</label>
        <input type="password" className=' h-9 rounded-lg p-3 border border-red-500 outline-none' placeholder='password#####1233' data-lpignore="true"/>
        
        <button className='rounded-full bg-[#BF2222] mb-2 mt-3 font-semibold text-2xl text-white'>Register</button>
       </form>
       <p className='mb-3'>Have an account? <a>Login</a></p>
      </div>
  </div>
  )
}

export default SignUp