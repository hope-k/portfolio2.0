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
import { useRouter } from 'next/router'
import { useInViewContext } from '../../hooks/currentPage'
import { useInView } from 'react-intersection-observer'

type Props = {
    pageInfo: PageInfo
}

const Hero = ({ pageInfo }: Props) => {
    const { selectedTab, setSelectedTab } = useInViewContext()
    const { ref, inView } = useInView({
        threshold: 0.3,
    })
    useEffect(() => {
        if (inView) {
            setSelectedTab(0)
        }
    }, [inView, setSelectedTab])
  
    //check if url is #about using router 
    const links = [
        {
            name: 'home', svg: (
                <svg className=' stroke-[#ccc] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" height='1.2em' width='1.2em'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>


            )
        },
        {
            name: 'about', svg: (
                <svg className=' stroke-[#ccc] ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" height='1.2em' width='1.2em'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            name: 'skills', svg: (
                <svg className='peer-hover:stroke-white stroke-[#ccc]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height='1.2em' width='1.2em'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
            )
        },
        {
            name: 'projects', svg: (
                <svg className='hover:stroke-white stroke-[#ccc] w-full h-full' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" height='1.2em' width='1.2em' >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
            )
        },
        {
            name: 'contact', svg: (
                <svg className='peer-hover:stroke-white stroke-[#ccc]' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" height='1.2em' width='1.2em'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            )
        }
    ]



    const [text, count] = useTypewriter({
        words: [`Hi My Name Is ${pageInfo?.name}`, 'Fullstack Developer.tsx', "Frontend Developer.jsx", 'Backend Developer.js', 'Mobile Developer.dart'],
        loop: true,
        delaySpeed: 2000,
    })

    const buttonVariant = {
        hidden: {
            opacity: 0,
            translateX: -10
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
        <motion.section ref={ref} layout='size' id='home' className='px-10 snap-center h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden relative  '>
            <motion.div
                whileInView={{
                    backgroundSize: ['100% ', '150% '],
                    opacity: 1,
                    
                }}
                transition={{
                    opacity: {
                        duration: .5,
                        ease: 'easeInOut',
                    },
                    backgroundSize: {
                        delay: 1,
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'mirror',
                        repeatDelay: 0,
                    },
                }}
                className='heroBg'></motion.div>
            <BackgroundCircle />
            <motion.div
                layout='position'
                
                className=' h-28 w-28 relative '>
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
                layout='position'
                className={`p-[3px] fixed  ${selectedTab == 0 ? 'top-0' : selectedTab == 2 ? 'md:top-16 top-0' : selectedTab == 4  ? 'bottom-10' : selectedTab == 3 ? '-top-6' :'md:top-4 top-12'} z-[100] backdrop-blur-[10px] bg-[rgba(38,37,37,0.3)] flex flex-row border-[0.0001px] border-[#cccccc42] rounded-md`}
            >
                {
                    links.map((link, i) => (
                        <Link
                            href={`/#${link.name}`}
                            key={i}
                            className='relative'
                            onClick={() => setSelectedTab(i)}

                        >
                            <motion.div
                                variants={buttonVariant} className={` p-2 relative cursor-pointer rounded-md  mr-[2px] z-20 bg-blend-exclusion`}>
                                {
                                    link.svg
                                }

                            </motion.div>
                            {
                                i == selectedTab
                                    ?
                                    <motion.div
                                        layoutId='bg-fuchsia-700 absolute left-0 bottom-0 top-0 right-0 z-10 rounded-md mr-[2px] '
                                        className='bg-fuchsia-700 absolute left-0 bottom-0 top-0 right-0 z-10 rounded-md mr-[2px] animate-pulse'>

                                    </motion.div>
                                    :
                                    null
                            }
                        </Link>

                    ))
                }

            </motion.div>

        </motion.section>
    )
}

export default Hero