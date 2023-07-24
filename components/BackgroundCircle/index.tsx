import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const BackgroundCircle = ({ }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{
                scale: [1, .6, .8, 1.8, 1],
                opacity: [0.09, 0.14, 0.18, 0.19, 0.22, 0.27],
            }}
            transition={{
                duration: 10,
                repeatType: 'reverse',
                repeat: Infinity,
                ease: 'easeInOut',



            }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute border border-[#F7AB0A]/50 rounded-full w-[200px] h-[200px] animate-ping mt-52 ' />
            <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 ' />
            <div className='absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52 ' />
            <div className=' border border-[teal] rounded-full opacity-20 h-[650px] w-[650px] mt-52 absolute animate-pulse ' />
            <div className='absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52 ' />

        </motion.div>
    )
}

export default BackgroundCircle