import React, { useEffect } from 'react'
import { motion, useTransform, useScroll, AnimatePresence, } from 'framer-motion'
import Image from 'next/image'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { PageInfo } from '../../typings'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { urlFor } from '../../sanity'
import { useInViewContext } from '../../hooks/currentPage'
import { useInView } from 'react-intersection-observer'
type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
    const { selectedTab, setSelectedTab } = useInViewContext()
    const { ref, inView } = useInView({
        threshold: 0.3,

    })
    const buttonExpand = {
        initial: {
            width: '0rem',

        },
        show: {
            width: '100%',
            transition: {
                duration: .35,
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 0.2,
            }

        },
        exit: {
            width: '10rem',
            transition: {
                duration: .1
            }
        }
    }
    const detailAnimation = {
        initial: {
            opacity: 0,
            maxHeight: 0,

        },
        show: {
            opacity: 1,
            maxHeight: '100%',
            transition: {
                duration: .5,
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 0.2,
                delay: .3,




            }

        },
        exit: {
            opacity: 0,
            maxHeight: 0,
            transition: {
                duration: .1
            }

        }

    }
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
                className='bg-gray-900 w-full snap-center items-center justify-evenly px-3 msx-auto md:flex-row  h-screen flex flex-col relative text-center md:text-left'
            >
                <div className='aboutBg'></div>
                <motion.h3
                    initial={comeUp.initial}
                    whileInView={comeUp.whileInView}
                    className='text-teal-500 absolute xl:top-24 top-[3rem] uppercase tracking-[1rem] md:tracking-[3rem] text-lg font-light '
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

                <div className=' relative z-50 h-[60%] w-full md:w-1/2 '>
                    <motion.div
                        variants={buttonExpand}
                        whileInView={'show'}
                        initial='initial'
                        className='bg-[#6e1e9969] h-4 rounded w-full absolute top-0 left-0 backdrop-blur-[4px]'>
                    </motion.div>

                    <motion.div
                        variants={detailAnimation}
                        whileInView={'show'}
                        initial='initial'
                        exit={'exit'}


                        className='text-black backdrop-blur-[4px] bg-[rgba(54,53,53,0.3)] rounded p-6 md:p-10 w-full '>
                        <motion.div className='mb-2 text-gray-200 poiret tracking-wide text-2xl font-semibold whitespace-nowrap'>
                            Here is a <span className='underline decoration-[teal]'>little</span> background
                        </motion.div>
                        <motion.p
                            initial={{
                                y: -30
                            }}
                            whileInView={{
                                y: 0
                            }}
                            transition={
                                {
                                    duration: .55
                                }
                            }
                            className='text-sm text-[#ccc]  xl:text-[1.2rem]  max-w-xl text-left font-light '>
                            {pageInfo?.backgroundInfo}
                        </motion.p>
                    </motion.div>
                </div>

            </motion.section>
        </>
    )
}

export default About