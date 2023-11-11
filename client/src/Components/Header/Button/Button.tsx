import React from 'react'

import { motion } from 'framer-motion';

const Button = () => {
  return (
    <div className='h-[40px] w-[100px] rounded-[20px] cursor-pointer overflow-hidden'>
        <div className='w-full h-full flex justify-center items-center uppercase'>
            <p>Menu</p>
        </div>
        <div className='w-full h-full bg-black text-white flex justify-center items-center absolute top-[100%] uppercase'>
            <p>Close</p>
        </div>
    </div>
  )
}

export default Button