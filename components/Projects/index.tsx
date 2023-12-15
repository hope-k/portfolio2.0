import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import Image from 'next/image'
import mouseScroll from '../../animations/lottie/mouseScroll.json';
import Lottie from 'react-lottie'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useInViewContext } from '../../hooks/currentPage'
import downAni from '../../animations/lottie/downAni.json'
import { SocialIcon } from 'react-social-icons'

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    const { selectedTab, setSelectedTab } = useInViewContext()
    const [detailOpenIndex, setDetailOpenIndex] = useState(-1)
    const buttonExpand = {
        initial: {
            width: '10rem',

        },
        show: {
            width: '100%',

        },
        exit: {
            width: '10rem',
        }
    }
    const detailAnimation = {
        initial: {
            opacity: 0,
            maxHeight: 0,

        },
        show: {
            opacity: 1,
            maxHeight: '20rem',
        },
        exit: {
            opacity: 0,
            maxHeight: 0,

        }

    }

    const { ref, inView } = useInView({
        threshold: 0.3,
    })

    useEffect(() => {
        if (inView) {
            setSelectedTab(4)
        }
    }, [inView, setSelectedTab])
    const slowedDownOptions = {
        loop: true,
        animationData: mouseScroll,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <motion.section
            ref={ref}

            initial={pageTransition.initial}
            whileInView={pageTransition.whileInView}
            viewport={{ once: true }}
            id='projects'
            className='bg-[#48b9bba0]  scrollbar h-screen snap-center relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center w-full overflow-y-hidden'
        >
            <div className="z-0 absolute top-[30%] bg-black/10 left-0 md:h-[500px] md:w-[500px] md:rounded-2xl animate-pulse"></div>
            <div className="z-0 absolute top-[30%] bg-black/10 right-0 md:h-[500px] md:w-[500px] md:rounded-2xl animate-pulse"></div>
            <div className="z-0 absolute top-[30%] bg-black/10 bottom-0 md:h-[500px] md:w-[500px] md:rounded-2xl  animate-pulse"></div>
                <div className='flex justify-center absolute w-14 h-20 top-0'>
                    <Lottie
                        options={slowedDownOptions}
                        speed={0.5}


                    />
                </div>
            <motion.div

                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                viewport={{
                    once: true
                }}
                className='absolute  top-[3.5rem] xl:top-4 uppercase md:tracking-[4rem] tracking-[1.1rem] text-lg font-light text-teal-500 flex justify-center w-full'
            >
                <span>Projects</span>
            </motion.div>
            <motion.div className="  scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[#ccc]/80 relative h-fit  w-full  flex  snap-x snap-mandatory ">
                {/*`projects`*/}
                {projects?.map((project, index) => (
                    <motion.div key={index} className=' overflow-hidden  w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-[10px] px-[5px] md:p-28 h-full'>
                        {/*image*/}
                        <div className='bg-white/90 px-[5px] rounded-br rounded-bl font-light border-t-2 border-red-500  text-teal-500 text-sm'>
                            <span>{index + 1} / {projects.length}</span>
                        </div>

                        <Link target={'_blank'} href={project?.projectUrl}>

                            <motion.div
                                layout
                                initial={{
                                    y: -60,
                                    opacity: 0
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1,
                                        type: 'spring',
                                        stiffness: 320,
                                        damping: 90,
                                        mass: 1,

                                    }
                                }}
                                viewport={{ once: false }}
                                className=' relative w-[270px] h-[143px] lg:h-[230px] lg:w-[460px] mt-[4rem] md:mt-[5rem] rounded-md '>
                                <Image
                                    src={urlFor(project?.image)}
                                    alt={project?.title}
                                    fill
                                    className='rounded-md object-fit w-full h-full'
                                />
                            </motion.div>
                        </Link>
                        <motion.div className='w-full flex justify-center flex-col lg:max-w-4xl '>
                            <motion.div
                                variants={buttonExpand}
                                key={index}
                                initial={'initial'}
                                animate={detailOpenIndex == index ? 'show' : 'initial'}
                                exit={'exit'}
                                transition={{
                                    duration: .3,
                                    type: 'spring',
                                    stiffness: 120,
                                    damping: 20,
                                    mass: 0.2,



                                }}
                                onClick={
                                    () => {
                                        if (detailOpenIndex == index) {
                                            setDetailOpenIndex(-1)
                                        } else {
                                            setDetailOpenIndex(index)
                                        }
                                    }
                                } className='text-sm mx-auto cursor-pointer  w-[10rem]  text-center relative  rounded bg-white text-black py-2 border-b-2  flex justify-between border-red-500 items-center'>
                                <span className='tracking-widest w-full h-full text-center'>{" " + project?.title}</span>
                                {
                                    detailOpenIndex == index && (
                                        <>
                                            {/**Website link */}
                                            <motion.div
                                                initial={{ opacity: 0, left: '20rem' }}
                                                whileInView={{
                                                    left: '1rem',
                                                    opacity: 1
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    duration: 1
                                                }}
                                                className='absolute left-2 flex'
                                            >
                                                <Link
                                                    href={project?.projectUrl}
                                                    target='_blank'
                                                    className='bg-gray-200 rounded-full duration-500 ease-in transition-all p-1 h-full hover:bg-black '
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="w-6 h-6 hover:stroke-white " >
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                                                    </svg>
                                                </Link>
                                            </motion.div>
                                            {/**github link */}
                                            <motion.div
                                                initial={{ opacity: 0, right: '20rem' }}
                                                whileInView={{
                                                    right: '1rem',
                                                    opacity: 1
                                                }}
                                                transition={{
                                                    type: 'spring',
                                                    duration: 1
                                                }}
                                                className='absolute right-2'
                                            >
                                                <Link className=' flex items-center  p-1' href={project?.githubUrl || '/'} target='_blank'>
                                                    <svg fill="#000000" className='w-6 h-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <g data-name="Layer 2">
                                                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                                                            <path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github" />
                                                        </g>

                                                    </svg>
                                                </Link>
                                            </motion.div>
                                        </>
                                    )
                                }

                            </motion.div>
                            <AnimatePresence>
                                <motion.p
                                    variants={detailAnimation}
                                    key={index}
                                    initial={'initial'}
                                    animate={detailOpenIndex == index ? 'show' : 'initial'}
                                    exit={'exit'}
                                    transition={{
                                        duration: .5,
                                        type: 'spring',
                                        stiffness: 120,
                                        damping: 20,
                                        mass: 0.2,
                                        delay: .2,



                                    }}
                                    className='font-light w-full max-h-[20rem]  relative top-0  text-sm md:text-base text-center backdrop-blur-[4px] border-[0.5px] border-[#cccccc4d] bg-[rgba(25,24,24,0.3)] text-[#fefefe] p-4 rounded-md overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[teal]/80 m-auto md:overflow-hidden'>
                                    {project?.summary}

                                </motion.p>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                ))
                }

            </motion.div>


        </motion.section>
    )
}

export default Projects