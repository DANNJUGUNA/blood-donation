import React from 'react'
import {BsFillHeartPulseFill} from 'react-icons/bs'
const Navbar = () => {
  return (
    <div className=' flex flex-row py-4' >
        <div className=' mx-5 text-white flex flex-col'>
            <BsFillHeartPulseFill size={45}/>
            <p>A life saved is our happiness</p>
        </div>
    </div>
  )
}

export default Navbar