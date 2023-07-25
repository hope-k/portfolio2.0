import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { Skill as SkillType } from '../../typings'
import { useInViewContext } from '../../hooks/currentPage'
import { useInView } from 'react-intersection-observer'
type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
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
      id='skills'
      layout='position'
      className='bg-sky-700/60 snap-center xl:space-y-0 mx-auto items-center justify-center min-h-screen flex relative flex-col text-center md:text-left xl:flex-row overflow-hidden px-10 flex-shrink-0'>
      <motion.h3
        initial={comeUp.initial}
        whileInView={comeUp.whileInView}
        className='absolute top-24 xl:top-10 uppercase  md:tracking-[4rem] tracking-[2rem] text-lg font-light text-teal-500 flex justify-center w-full'>
        Skills
      </motion.h3>
      <h3 className=' absolute top-36 xl:top-[4.7rem] uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill
      </h3>

      <motion.div layout='position' className='grid xl:grid-cols-5 gap-5 grid-cols-4'>
        {
          skills?.slice(0, skills?.length / 2).map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))
        }        
        {
          skills?.slice(skills?.length / 2, skills?.length).map((skill, index) => (
            <Skill key={index} skill={skill} directionLeft/>
          ))
        }
      </motion.div>

    </motion.section>
  )
}

export default Skills 