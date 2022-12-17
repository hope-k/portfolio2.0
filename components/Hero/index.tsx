import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'

type Props = {
pageInfo: PageInfo
}

const Hero = ({pageInfo}: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi My Name Is ${pageInfo?.name}`, 'Fullstack Developer.tsx', "< ExplorePortfolio />"],
        loop: true,
        delaySpeed: 2000,
    })

    const buttonVariant = {
        hidden: {
            opacity: 0,
            translateX: -15
        },
        show: {
            opacity: 1,
            translateX: 0,
            transition: {
                type: 'spring',
                duration: 1.8,



            }

        },
        exit: {
            opacity: 0,
            translateX: -30,

        }




    }
    return (
        <section id='hero' className=' snap-start h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative  '>
            <div className='heroBg'></div>
            <BackgroundCircle />
            <div className=' h-28 w-28 relative '>
                <Image width={128} height={128} alt='Hope-K Photo' src={urlFor(pageInfo?.heroImage)} className='rounded-full mx-auto' />
            </div>
            <div className='z-20'>
                <h2 className=' font-light text-sm uppercase text-gray-500 pb-2 tracking-[15px] px-5 whitespace-nowrap'>
                    {pageInfo?.role}
                </h2>
                <div className='text-5xl lg:text-6xl font-semibold px-10 '>
                    <motion.span layout className='mr-3 '>{text}</motion.span>
                    <Cursor cursorColor='teal' />
                </div>
                <motion.div
                    variants={{
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                duration: 1.8,
                                type: 'spring',

                            }
                        }
                    }}
                    initial='hidden'
                    whileInView='show'
                    exit='exit'
                    className='pt-5 '
                >
                    <Link href='#about'>
                        <motion.button variants={buttonVariant} className='hero-button'>About</motion.button>
                    </Link>
                    <Link href='#contact'>
                        <motion.button variants={buttonVariant} className='hero-button'>Contact</motion.button>
                    </Link>
                    <Link href='#skills'>
                        <motion.button variants={buttonVariant} className='hero-button'>Skills</motion.button>
                    </Link>
                    <Link href='#projects'>
                        <motion.button variants={buttonVariant} className='hero-button'>Projects</motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero