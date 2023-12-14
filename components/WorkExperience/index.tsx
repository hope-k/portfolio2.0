import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../../typings'
import mouseScroll from '../../animations/lottie/mouseScroll.json';
import Lottie from 'react-lottie';
import { useInViewContext } from '../../hooks/currentPage'
import { useInView } from 'react-intersection-observer'

type Props = {
    experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
    const slowedDownOptions = {
        loop: true,
        animationData: mouseScroll,
        autoplay: true,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    const { selectedTab, setSelectedTab } = useInViewContext()
    const { ref, inView } = useInView({
        threshold: 0.3,
    })
    useEffect(() => {
        if (inView) {
            setSelectedTab(2)
        }
    }, [inView, setSelectedTab])


    return (
        <motion.section
            ref={ref}
            initial={pageTransition.initial}
            whileInView={pageTransition.whileInView}
            id='experience'
            className='snap-center xl:mt-48 h-screen  bg-gray-800 relative flex overflow-hidden flex-col text-left md:flex-row max-w-full px-3 lg:px-10 justify-evenly mx-auto items-center'>
            <motion.h3
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className=' absolute top-36 xl:top-6 uppercase tracking-[20px] text-xl font-light text-teal-500'
            >
                Experience
            </motion.h3>
            <div className='flex justify-center absolute w-14 h-20 top-2'>
                <Lottie
                    options={slowedDownOptions}
                    speed={0.5}


                />
            </div>

            <div className=' relative top-20 md:top-0 scrollbar-thumb-[teal]/80 scrollbar-thumb-rounded-full h-[80vh] scrollbar-thin scrollbar-track-gray-400/20 w-full  flex space-x-5 overflow-x-scroll snap-x snap-mandatory rounded-xl'>
                {/*experience cards*/}
                {
                    experiences?.map((exp, index) => (
                        <ExperienceCard index={index} length={experiences?.length} key={index} exp={exp} />
                    ))
                }

            </div>
        </motion.section>
    )
}

export default WorkExperience