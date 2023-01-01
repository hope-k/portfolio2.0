import React from 'react'
import { motion, useTransform, useScroll, } from 'framer-motion'
import Image from 'next/image'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { PageInfo } from '../../typings'
type Props = {
    pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {

    return (
        <>
            <motion.section
                initial={pageTransition.initial}
                whileInView={pageTransition.whileInView}
                id='about'
                className=' w-full snap-center max-w-7xl mx-auto items-center justify-evenly px-10 md:flex-row  h-screen flex flex-col relative text-center md:text-left'
            >
                <div className='aboutBg'></div>
                <motion.h3
                    initial={comeUp.initial}
                    whileInView={comeUp.whileInView}
                    className='text-teal-500 absolute top-24 uppercase tracking-[20px] text-xl font-light '
                >
                    About
                </motion.h3>

                {/* image */}
                <motion.div
                    initial={{
                        x: -100,
                        opacity: 0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: {
                            type: 'spring',
                            stiffness: 120,
                            damping: 20,
                            mass: 0.2,

                            
                        }
                    }}
                    className='xl:w-[300px] xl:h-[350px]  md:w-60 md:h-60 relative flex-shrink-0 md:mb-0 w-40 h-40 md:my-0 top-14 md:top-0'>


                    <Image
                        alt='Hope-K Photo'
                        src='/me.jpg'
                        layout='fill'
                        className='object-cover border border-teal-500 rounded-full md:rounded-lg'

                    />
                </motion.div>

                <div className='space-y-10 px-0 md:px-10 relative z-50 '>
                    <motion.div className='poiret tracking-wide text-2xl font-semibold whitespace-nowrap'>
                        Here is a <span className='underline decoration-[teal]'>little</span> background
                    </motion.div>
                    <motion.p className='text-base max-w-xl text-left'>
                        {pageInfo?.backgroundInfo}
                    </motion.p>
                </div>

            </motion.section>
        </>
    )
}

export default About