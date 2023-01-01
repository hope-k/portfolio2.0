import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Skill } from '../../typings';
import { urlFor } from '../../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

const Skill = ({ directionLeft, skill }: Props) => {
    return (
        <>

            <motion.div
                initial={{
                    x: (directionLeft) ? -30 : 30,
                    opacity: 0
                }}
                transition={{
                    duration: 1.8,
                    type: 'spring',
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                exit={{
                    x: directionLeft ? 30 : -30,
                    opacity: 0,
                    transition: {
                        duration: .1
                    }
                }}
                layout='position'
                className='group rounded-full  p-1 border border-gray-500 w-16 h-16 xl:w-24 xl:h-24 flex relative cursor-pointer z-10  overflow-hidden items-center justify-center'
            >
                <Image
                    src={urlFor(skill?.image)}
                    alt={skill?.title}
                    width={100}
                    height={100}
                    className='group-hover:grayscale rounded-full transition-all duration-300 ease-in-out object-cover w-full h-full'
                />
                <div className='rounded-full z-0 w-16 h-16 xl:w-24 xl:h-24 absolute opacity-0 group-hover:opacity-80 transition-all duration-300 ease-in-out group-hover:bg-white'>
                    <div className='items-center h-full flex justify-center'>
                        <p className='uppercase text-xs font-bold opacity-100 text-black whitespace-pre-line'>{skill?.title}</p>
                    </div>
                </div>
            </motion.div>



        </>
    )
}

export default Skill