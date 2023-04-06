import React from 'react'
import {Link} from 'react-router-dom'
import {BsFillHeartPulseFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <nav className=' flex flex-row py-4 items-center bg-white' >
        <div className=' mx-5 text-red-500 flex flex-col'>
            <p className='ml-6'>< BsFillHeartPulseFill size={50}/></p>
            <p className=' font-thin'>A life saved is our happiness</p>
        </div>
        <div className=' flex flex-row items-center text-red-500 justify-between font-semibold'>
            
              <li>Home</li>
              <li>About us</li>
              <li>Dashboard</li>
              <li>Sign up</li>
              <li>Login</li>
          
        </div>
        <hr className=' bg-white'/>
    </nav>
  )
}

export default Navbar