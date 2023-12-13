import React from 'react'
import { motion } from 'framer-motion'
type Props = {}

const BackgroundCircle = ({ }: Props) => {
    return (
        <div

            className='relative flex justify-center items-center'
        >
            <div className='absolute border opacity-25 border-[#6724B4]/80 rounded-full w-[200px] h-[200px]  animate-ping mt-52 ' />


        </div>
    )
}

export default BackgroundCircle