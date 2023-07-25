import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import Image from 'next/image'
import mouseScroll from '../../animations/lottie/mouseScroll.json';
import Lottie from 'lottie-react'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { useInViewContext } from '../../hooks/currentPage'
import downAni from '../../animations/lottie/downAni.json'
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
            setSelectedTab(3)
        }
    }, [inView, setSelectedTab])

    return (
        <motion.section
            ref={ref}
            
            initial={pageTransition.initial}
            whileInView={pageTransition.whileInView}
            viewport={{ once: true }}
            id='projects'
            className='bg-[#48b9bba0]  scrollbar h-screen snap-center relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center w-full overflow-y-hidden'
        >
            <div className="z-0 absolute top-[30%] bg-black/10 left-0 md:h-[500px] md:w-[500px] md:rounded-2xl "></div>
            <div className="z-0 absolute top-[30%] bg-black/10 right-0 md:h-[500px] md:w-[500px] md:rounded-2xl "></div>
            <div className="z-0 absolute top-[30%] bg-black/10 bottom-0 md:h-[500px] md:w-[500px] md:rounded-2xl  "></div>
            <motion.div
                
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className='absolute  top-[3.5rem] xl:top-4 uppercase md:tracking-[4rem] tracking-[1.1rem] text-lg font-light text-teal-500 flex justify-center w-full'
            >
                <span>Projects</span>
                <div className='flex justify-center absolute w-full h-20 top-7'>
                    <Lottie
                        animationData={mouseScroll}
                        className=''
                    />
                </div>
            </motion.div>
            <motion.div  className="  scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[#ccc]/80 relative h-fit  w-full  flex  snap-x snap-mandatory ">
                {/*`projects`*/}
                {projects?.map((project, index) => (
                    <motion.div key={index} className=' overflow-hidden  w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-[10px] px-[5px] md:p-28 h-full'>
                        {/*image*/}

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
                        <motion.div  className='w-full flex justify-center flex-col lg:max-w-4xl '>
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
                            } className='text-sm mx-auto cursor-pointer  w-[10rem]  text-center relative  rounded bg-white text-black py-2 border-b-2  flex justify-between border-red-500'>
                                <span className='tracking-widest w-full h-full text-center'>{" " + project?.title}</span>
                          
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
                                    className='font-light w-full max-h-[20rem]  relative top-0  text-sm md:text-base text-center backdrop-blur-[4px] border-[0.5px] border-[#cccccc4d] bg-[rgba(25,24,24,0.3)] text-[#ccc] p-4 rounded-md overflow-y-auto scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[teal]/80 m-auto md:overflow-hidden'>
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