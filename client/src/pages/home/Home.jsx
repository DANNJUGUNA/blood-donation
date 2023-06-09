import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-row py-20 mx-6 justify-center items-center'>
      <div className='flex flex-col items-center absolute'>
      <h1 className=' flex items-center absolute text-black font-bold text-5xl mb-8'>Safe</h1>
      <h1 className=' flex items-center absolute text-blue-500 font-bold text-5xl mt-9'>Life</h1>
      </div>
      <img className='rounded-full w-[300px] h-[300px] bg-cover border-solid border-4 border-white'
      src="https://images.pexels.com/photos/5149400/pexels-photo-5149400.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
       <img className='rounded-full w-[300px] h-[300px] bg-cover
       border-solid border-4 border-white'
        src="https://images.pexels.com/photos/4531306/pexels-photo-4531306.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
      <img className='rounded-full w-[300px] h-[300px] bg-cover
      border-solid border-4 border-white'
      src="https://media.istockphoto.com/id/1316973706/photo/3d-rendered-illustration-of-blood-drop-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=M1J0ZZaoDSLV8F4CLeHvBllmdh1lBijmDcaLObjpvHU=" alt="" />
      <img className='rounded-full w-[300px] h-[300px] bg-cover
      border-solid border-4 border-white'
      src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
    </div>
  )
}

export default Home