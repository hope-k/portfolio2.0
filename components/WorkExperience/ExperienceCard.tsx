import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Experience } from '../../typings'
import { urlFor } from '../../sanity'
type Props = {
    exp: Experience
}

const ExperienceCard = ({ exp }: Props) => {
    return (
        <article className='duration-400 transition-all justify-center opacity-40 hover:opacity-100 bg-[#292929] p-10 snap-center flex flex-col rounded-xl xl:rounded-lg items-center space-y-7 flex-shrink-0 w-[450px] md:w-[600px] xl:w-[900px]'>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        type: 'spring',
                    },

                }}
                viewport={{ once: true }}


                className='h-28 w-28 relative'>
                <Image
                    src={urlFor(exp?.companyImage)}
                    alt='Company Logo'
                    fill
                    className='rounded-full xl:w-[200px] xl:h-[200px] object-cover'
                />
            </motion.div>
            <div className='px-0 md:px-10'>
                <h4 className='text-2xl font-light'>{exp?.jobTitle}</h4>
                <p className='font-bold mt-1'>{exp?.companyName}</p>
                <div className='flex space-x-2 my-2'>
                    {/* tech */}
                    {exp?.technologies?.map((tech, i) => (
                        <div key={i} className='relative h-10 w-10'>
                            <Image
                                src={urlFor(tech?.image)}
                                alt='typescript'
                                fill
                                className='rounded-full object-cover'
                            />
                        </div>

                    ))}

                </div>
                <p className='uppercase py-5 text-gray-300'>
                    {new Date(exp?.dateStarted).toDateString()}
                    -
                    {
                        exp?.isCurrent ? 'Present' : new Date(exp?.dateEnded).toDateString()
                    }
                </p>
                <ul className='list-disc space-y-4 ml-5 text-sm'>
                    {exp?.points?.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}

                </ul>
            </div>

        </article>
    )
}

export default ExperienceCard