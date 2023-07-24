import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
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

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    const { selectedTab, setSelectedTab } = useInViewContext()
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
            className='bg-[#da3b3bba] scrollbar h-screen snap-center relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center w-full'
        >
            <div className="z-0 w-screen absolute top-[30%] bg-[teal]/20 left-0 h-[500px] -skew-y-[12deg]"></div>
            <motion.div
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className='absolute left-4 top-[3.5rem] xl:top-4 uppercase md:tracking-[4rem] tracking-[1.1rem] text-lg font-light text-teal-500 flex justify-center w-full'
            >
                <span>Projects</span>
                <div className='flex justify-center absolute w-full h-8 md:h-10 top-11'>
                    <Lottie
                        animationData={mouseScroll}
                        className='rotate-90'
                    />
                </div>
            </motion.div>
            <motion.div className="tmd:top-0 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[teal]/80 relative w-full  flex overflow-x-scroll  snap-x snap-mandatory ">
                {/*`projects`*/}
                {projects?.map((project, index) => (
                    <motion.div key={index} className='mx-auto w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-[10px] md:p-28 h-[80%]'>
                        {/*image*/}
                        <Link target={'_blank'} href={project?.projectUrl}>

                            <motion.div
                                initial={{
                                    y: -60,
                                    opacity: 0
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1.8,
                                        type: 'spring',

                                    }
                                }}
                                viewport={{ once: false }}
                                className=' relative w-[270px] h-[143px] lg:h-[230px] lg:w-[460px] mt-[6rem] md:mt-12 rounded-md '>
                                <Image
                                    src={urlFor(project?.image)}
                                    alt={project?.title}
                                    fill
                                    className='rounded-md object-fit w-full h-full'
                                />
                            </motion.div>
                        </Link>
                        <div className=' space-y-3 md:space-y-10 md:px-10 max-w-5xl '>
                            <Link target={'_blank'} href={project?.projectUrl}>
                                <div className='xl:text-2xl text-[1.1rem] md:t font-semibold text-center whitespace-nowrap capitalize'>
                                    <span className=' border-[#FA0]/60 border rounded-md p-2'>
                                        Project {index + 1} of {projects?.length}:
                                    </span>
                                    <span className='text'>{" " + project?.title}</span>
                                </div>
                            </Link>
                            <p className='font-light h-[13rem] md:h-full scroll-m-2 text-sm md:text-base text-center lg:max-w-4xl backdrop-blur-[20px] border-[0.5px] border-[#cccccc4d] bg-[rgba(25,24,24,0.3)] text-[#ccc] p-4 rounded-md overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[teal]/80 '>
                                {project?.summary}
                            </p>
                        </div>
                    </motion.div>
                ))
                }

            </motion.div>


        </motion.section>
    )
}

export default Projects