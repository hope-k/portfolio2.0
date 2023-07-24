import React, {useEffect} from 'react'
import { motion, useTransform, useScroll, } from 'framer-motion'
import Image from 'next/image'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { PageInfo } from '../../typings'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { urlFor } from '../../sanity'
import {useInViewContext} from '../../hooks/currentPage'
import { useInView } from 'react-intersection-observer'
type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
    const { selectedTab, setSelectedTab } = useInViewContext()
    const {ref, inView }= useInView({
        threshold: 0.3,

    })
    useEffect(() => {
        if (inView) {
            setSelectedTab(1)
        }
    }, [inView, setSelectedTab])
  
    return (
        <>
            <motion.section
                initial={pageTransition.initial}
                whileInView={pageTransition.whileInView}
                id='about'
                ref={ref}
                className='bg-[#dccb92] w-full snap-center items-center justify-evenly px-10 md:flex-row  h-screen flex flex-col relative text-center md:text-left'
            >
                <div className='aboutBg'></div>
                <motion.h3
                    initial={comeUp.initial}
                    whileInView={comeUp.whileInView}
                    className='text-teal-500 absolute xl:top-24 top-[3rem] uppercase tracking-[2rem] md:tracking-[4rem] text-lg font-light '
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
                    className=' xl:w-[300px] xl:h-[350px]  md:w-60 md:h-60 relative flex-shrink-0 md:mb-0 w-40 h-40 md:my-0 top-14 md:top-0'>


                    <LazyLoadImage
                        alt='Hope-K Photo'
                        src={urlFor(pageInfo?.profileImage)}
                        effect='blur'
                        className='object-cover border border-teal-500 rounded-full md:rounded-lg '

                    />
                </motion.div>

                <div className='p-6 md:p-10 relative z-50 text-black backdrop-blur-[15px] bg-[rgba(38,37,37,0.3)] rounded-sm'>
                    <motion.div className='mb-2 poiret tracking-wide text-2xl font-semibold whitespace-nowrap'>
                        Here is a <span className='underline decoration-[teal]'>little</span> background
                    </motion.div>
                    <motion.p className='text-sm xl:text-[1.2rem] tracking-tighter leading-6 max-w-xl text-left font-light '>
                        {pageInfo?.backgroundInfo}
                    </motion.p>
                </div>

            </motion.section>
        </>
    )
}

export default About