import React from 'react'
import {Link} from 'react-router-dom'
import {BsFillHeartPulseFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div>
    <nav className=' flex flex-row flex-wrap py-4 items-center bg-white pb-1 gap-12' >
        <div className=' ml-12 text-red-500 flex flex-col mr-16'>
            <p className='ml-6 flex flex-row items-center font-semibold text-black text-2xl'>Safe <span className='text-red-500 ml-1 mr-1'>< BsFillHeartPulseFill size={50}/></span> Life</p>
            <p className=' font-thin text-[#BF2222]'>A life saved is our happiness</p>
        </div>
        <div className=' text-[#BF2222] font-semibold flex flex-wrap justify-between gap-9 mr-5 text-xl'>
            
              <Link to='/'>Home</Link >
              <Link to='/about'>About us</Link>
              <Link to='/dashboard'>Dashboard</Link>
              <Link to='/signup'>Sign up</Link>
              <Link to='login'>Login</Link>
          
        </div>
        <hr className=' bg-white'/>
    </nav>
    </div>
  )
}

export default Navbar