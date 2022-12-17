import React from 'react'
import { motion } from 'framer-motion'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'
type Props = {
    experience: Experience[]
}

const WorkExperience = ({experience}: Props) => {
    return (
        <motion.section
            initial={pageTransition.initial}
            whileInView={pageTransition.whileInView}
            id='experience'
            className='snap-center xl:mt-48 h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-3 lg:px-10 justify-evenly mx-auto items-center'>
            <motion.h3
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className=' absolute top-24 xl:top-6 uppercase tracking-[20px] text-xl font-light text-teal-500'
            >
                 Experience
            </motion.h3>

            <div className='scrollbar-thumb-[teal]/80 scrollbar-thumb-rounded-full scrollbar-thin scrollbar-track-gray-400/20 w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory rounded-xl'>
                {/*experience cards*/}
                {
                    experience?.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} />
                    ))
                }
               
            </div>
        </motion.section>
    )
}

export default WorkExperience