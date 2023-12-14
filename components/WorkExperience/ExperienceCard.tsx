import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'
import StepperAnimation from '../Stepper'




type Props = {
    exp: Experience,
    index: number,
    length: number
}

const ExperienceCard = ({ exp, index, length }: Props) => {
    const techVariants = {
        hidden: {
            opacity: 0,
            translateX: -10
        },
        show: {
            opacity: 1,
            translateX: 0,
            transition: {
                duration: 1,
                type: 'spring',
                stiffness: 120,
                damping: 20,
                mass: 0.2,
            }
   

        },
        exit: {
            opacity: 0,
            translateX: -30,

        }


    }
    return (
        <article className=' overflow-hidden text-[#ccc] w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center py-[10px] px-[5px] md:p-28 h-full'>
            <div className='px-0 md:px-10'>
                <h1 className='text-gray-700'>{index + 1} / {length}</h1>
                <h4 className='text-2xl font-light'>{exp?.jobTitle}</h4>
                <p className='font-semibold text-sm mb-2 mt-1'>{exp?.companyName}</p>
                <motion.div
                    variants={{
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: .2,
                                type: 'spring',
                                stiffness: 120,
                                damping: 20,
                                mass: 0.2,


                            }
                        }
                    }}
                    initial='hidden'
                    whileInView='show'
                    exit='exit'
                    className='flex space-x-2 my-2'>
                    {/* tech */}
                    {exp?.technologies?.map((tech, i) => (
                        <motion.div variants={techVariants} key={i} className='relative h-10 w-10 rounded-full'>
                            <Image
                                src={urlFor(tech?.image)}
                                alt='typescript'
                                fill
                                className='rounded-full object-cover'
                            />
                        </motion.div>

                    ))}

                </motion.div>
                <div className='relative pl-4'>
                    <div className='absolute left-0 py-[23px] flex flex-col justify-center items-center space-y-2 '>
                        <motion.div
                            initial={{
                                opacity: 0,

                            }}
                            
                            whileInView={{
                                opacity: 1,


                            }}
                            transition={{
                                delay: 2.45,
                                ease: 'circOut',
                            }}
                            className=' bg-yellow-500 h-3 w-2 rounded-lg animate-pulse shadow-yellow-700 circle '>

                        </motion.div>
                        <motion.div
                            initial={{
                                scaleY: 0,

                            }}
                            whileInView={{
                                scaleY: 1,
                                transition: {
                                    duration: 1.4,
                                    ease: 'circOut',
                                }
                            }}
                            className='w-[2px] rounded md:h-[10rem] h-[40vh]  bg-gray-300/80'>

                        </motion.div>


                    </div>
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5 }} className='capitalize py-5 text-gray-300 text-xs font-bold'>
                        {new Date(exp?.dateStarted).getFullYear()}
                        <span className='mx-1'>-</span>
                        {
                            exp?.isCurrent ? 'Present' : new Date(exp?.dateEnded).getFullYear()
                        }
                    </motion.div>
                    <div className=' space-y-4 ml-5 text-sm md:max-w-[50vw]'>
                        {exp?.description}
                    </div>
                </div>
            </div>

        </article>
    )
}

export default ExperienceCard