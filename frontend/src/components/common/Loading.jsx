import React from 'react'
import logo from '../../assets/logo.png'
const Loading = () => {
  return (
    <div className=' w-full h-screen flex items-center justify-center'>
      
        <div className=' flex gap-8 items-center justify-center mr-4'>
          <span className=' w-1 h-1 bg-green-500 shadow-sm rounded-full animate-ping'></span>
          <span className=' w-2 h-2 bg-red-500 shadow-sm rounded-full animate-ping'></span>
          <span className=' w-3 h-3 bg-orange-500 shadow-sm rounded-full animate-ping'></span>
        </div>
      <img src={logo} alt="logo.png" className=' animate-pulse w-10 lg:w-20' />
      <div className=' flex gap-8 items-center justify-center  ml-4'>
          <span className=' w-3 h-3 bg-green-500 shadow-sm rounded-full animate-ping'></span>
          <span className=' w-2 h-2 bg-red-500 shadow-sm rounded-full animate-ping'></span>
          <span className=' w-1 h-1 bg-orange-500 shadow-sm rounded-full animate-ping'></span>
        </div>
    </div>
  )
}

export default Loading
