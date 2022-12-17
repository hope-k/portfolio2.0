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
                opacity: [0.15, 0.28, 0.35, 0.34, 0.45, 1],
                borderRadius: ['20%', '20%', '50%', '80%', '20%'],
            }}
            transition={{
                duration: 10,
                repeatType: 'reverse',
                repeat: Infinity,
                ease: 'easeInOut',



            }}
            className='relative flex justify-center items-center'
        >
            <div className='absolute border border-[#F7AB0A]/30 rounded-full w-[200px] h-[200px] animate-ping mt-52 ' />
            <div className='absolute border border-[#333333] rounded-full w-[300px] h-[300px] mt-52 ' />
            <div className='absolute border border-[#333333] rounded-full w-[500px] h-[500px] mt-52 ' />
            <div className=' border border-[teal] rounded-full opacity-20 h-[650px] w-[650px] mt-52 absolute animate-pulse ' />
            <div className='absolute border border-[#333333] rounded-full w-[800px] h-[800px] mt-52 ' />

        </motion.div>
    )
}

export default BackgroundCircle