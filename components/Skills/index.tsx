import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { Skill as SkillType } from '../../typings'

type Props = {
  skills: SkillType[]
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.section
      initial={pageTransition.initial}
      whileInView={pageTransition.whileInView}
      id='skills'
      layout='position'
      className='snap-center xl:space-y-0 mx-auto items-center justify-center min-h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] px-10 flex-shrink-0'>
      <motion.h3
        initial={comeUp.initial}
        whileInView={comeUp.whileInView}
        className='absolute top-24 xl:top-10 uppercase tracking-[20px] text-xl font-light text-teal-500'>
        Skills
      </motion.h3>
      <h3 className=' absolute top-36 xl:top-[4.7rem] uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill
      </h3>

      <motion.div layout='position' className='grid grid-cols-4 gap-5 '>
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