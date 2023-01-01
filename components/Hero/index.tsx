import React, { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from '../BackgroundCircle'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { PageInfo } from '../../typings'
import { urlFor } from '../../sanity'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


type Props = {
    pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi My Name Is ${pageInfo?.name}`, 'Fullstack Developer.tsx', "Frontend Developer.jsx", 'Backend Developer.js', 'Mobile Developer.dart'],
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
        <motion.section layout='size' id='hero' className='px-10 snap-center h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative  '>
            <div className='heroBg'></div>
            <BackgroundCircle />
            <motion.div layout='position' className=' h-28 w-28 relative '>
                <LazyLoadImage
                    effect="blur"
                    width={128}
                    height={128}
                    alt='Hope-K Photo'
                    src={urlFor(pageInfo?.heroImage)}
                    className='rounded-full mx-auto'
                />
            </motion.div>
            <motion.h2 layout className='z-20 relative font-light text-sm uppercase text-gray-500 pb-2 tracking-[12px] md:tracking-[14px] px-5 whitespace-nowrap'>
                {pageInfo?.role}
            </motion.h2>

            <motion.div layout='position' className='z-20 relative'>
                <motion.div className='text-5xl lg:text-6xl font-semibold px-10 text-left '>
                    <motion.span className='mr-3 '>{text}</motion.span>
                    <Cursor cursorColor='teal' />
                </motion.div>
            </motion.div>

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
                className='z-20 relative mt-5  '
                layout
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

        </motion.section>
    )
}

export default Hero