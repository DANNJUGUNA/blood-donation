import React from 'react'

const DashBoard = () => {
  return (
    <div className='flex flex-row mt-5 gap-5'>
      <div className=' bg-white h-[100px] w-[150px] flex items-center justify-center'>
        <p>Donate Blood</p>
      </div>
      <div className=' bg-white h-[100px] w-[150px] flex items-center justify-center'>
        <p>Request Blood</p>
      </div>
      <div className=' bg-white h-[100px] w-[150px] flex items-center justify-center'>
        <p>Avaible Blood</p>
      </div>
    </div>
  )
}

export default DashBoard