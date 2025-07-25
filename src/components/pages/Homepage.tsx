'use client'

import React from 'react'
import { motion } from 'motion/react'
import Group3d from '../ui/Group3d'
import IconBar from '../ui/IconBar'

export default function Homepage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.02,
        filter: "blur(10px)"
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{
        duration: 1.2
      }}

      className="h-screen w-screen overflow-hidden flex  bg-[url('/heroimage.png')] bg-cover bg-center">
      <div className='flex flex-col w-[50%] justify-between items-center border-2'>
        <div className='w-full h-52'><IconBar /></div>
        <div className='flex justify-center items-center w-full h-full'><Group3d /></div>
      </div>

      <div className='flex flex-col w-[50%] justify-between items-center border-2'>
        <div className='border-2 border-amber-500 w-full h-full'>Right Topbar</div>
        <div className='border-2 border-red-500 w-full h-52'>Right Bottombar</div>
      </div>
    </motion.div>
  )
}
