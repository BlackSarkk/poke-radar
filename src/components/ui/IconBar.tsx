import React from 'react'
import { motion } from 'motion/react'


export default function IconBar() {
    return (
        <div className='flex justify-center pl-8 pt-3 gap-2 items-center h-full'>
            <motion.div
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}

                className=' h-full flex justify-center items-center'>

                <img src="/Icon.svg" alt="logo" />
            </motion.div>
            <div className='h-full flex text-7xl text-[#CCC0C0] font-keania justify-center items-center'>
                PokeRadar
            </div>
                <div className='border-2 border-transparent w-full h-full'></div>
            </div>
            )
}
