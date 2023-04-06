import React from 'react'
import {BsFillHeartPulseFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className=' flex flex-row py-4' >
        <div className=' mx-5 text-white flex flex-col'>
            <BsFillHeartPulseFill size={45}/>
            <p className=' font-thin'>A life saved is our happiness</p>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar