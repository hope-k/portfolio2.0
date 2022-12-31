import React from 'react'
import { motion } from 'framer-motion'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import Image from 'next/image'
import mouseScroll from '../../animations/lottie/mouseScroll.json';
import Lottie from 'lottie-react'
import { Project } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.section
            initial={pageTransition.initial}
            whileInView={pageTransition.whileInView}
            id='projects'
            className='scrollbar h-screen snap-center relative flex flex-col text-left md:flex-row max-w-full justify-evenly items-center  '
        >
            <div className="z-0 w-screen absolute top-[30%] bg-[teal]/10 left-0 h-[500px] -skew-y-[12deg]"></div>
            <motion.div
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className=' absolute top-[3.5rem] xl:top-4 uppercase tracking-[20px] text-xl font-light text-teal-500'
            >
                Projects
                <div className='flex justify-center absolute w-full h-8 md:h-14'>
                    <Lottie
                        animationData={mouseScroll}
                        className='rotate-90'
                    />
                </div>
            </motion.div>
            <motion.div className=" scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-yellow-100/20 scrollbar-thumb-[teal]/80 relative w-full  flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory ">
                {/*`projects`*/}
                {projects?.map((project, index) => (
                    <motion.div key={index} className='w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-28 xl:p-44 h-[screen] '>
                        {/*image*/}
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
                            viewport={{ once: true }}
                            className='relative w-[270px] h-[135px] lg:h-[300px] lg:w-[500px] mt-3 rounded-md '>
                            <Image
                                src={urlFor(project?.image)}
                                alt={project?.title}
                                fill
                                className='rounded-md object-cover'
                            />
                        </motion.div>
                        <div className='px-0 space-y-3 md:space-y-10 md:px-10 max-w-5xl '>
                            <div className='xl:text-2xl text-[1.1rem] md:t font-semibold text-center whitespace-nowrap capitalize'>
                                <span className=' underline decoration-[#FA0]/50 '>
                                    Case Study {index + 1} of {projects?.length}:
                                </span>
                                <span className='text'>{" " + project?.title}</span>
                            </div>

                            <p className='font-light text-sm md:text-base text-start md:text-left lg:max-w-3xl'>
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