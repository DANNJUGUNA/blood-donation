import React from 'react'
import {BiDonateBlood} from 'react-icons/bi'
import{SiSemaphoreci} from 'react-icons/si'
import {MdOutlineEventAvailable,MdEventSeat} from 'react-icons/md'
const DashBoard = () => {
  return (
    <div className='flex flex-row mt-5 gap-9 items-center justify-center '>
      <div className=' bg-cyan-500 h-[100px] w-[180px] flex items-center justify-center shadow-black shadow-xl rounded-3xl flex-col hover:scale-105 duration-300'>
      <BiDonateBlood size={45} className='text-red-500'/>
        <p className=' font-semibold text-xl text-white'>Donate Blood</p>
       
      </div>
      <div className=' bg-cyan-500 h-[100px] w-[180px] flex items-center justify-center rounded-3xl flex-col  shadow-black shadow-xl hover:scale-105 duration-300'>
        <SiSemaphoreci size={45} className='text-red-500'/>
        <p className=' font-semibold text-xl text-white'>Request Blood</p>
      </div>
      <div className=' bg-cyan-500 h-[100px] w-[180px] flex items-center justify-center  shadow-black shadow-xl rounded-3xl flex-col hover:scale-105 duration-300'>
        <MdOutlineEventAvailable size={45} className='text-red-500'/>
        <p className='font-semibold text-xl text-white'>Avaible Blood</p>
      </div>
      <div className=' bg-cyan-500 h-[100px] w-[180px] flex items-center justify-center  shadow-black shadow-xl rounded-3xl flex-col hover:scale-105 duration-300'>
        <MdEventSeat size={45} className='text-red-500'/>
        <p className='font-semibold text-xl  text-white'>Events</p>
      </div>
    </div>
  )
}

export default DashBoard