import React, { useEffect } from 'react'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { PageInfo } from '../../typings'
import { useInViewContext } from '../../hooks/currentPage'
import { useInView } from 'react-intersection-observer'

type Props = {
    pageInfo: PageInfo
}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string

}
const Contact = ({ pageInfo }: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const { selectedTab, setSelectedTab } = useInViewContext()
    const { ref, inView } = useInView({
        threshold: 0.3,
    })

    useEffect(() => {
        if (inView) {
            setSelectedTab(4)
        }
    }, [inView, setSelectedTab])
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${'hopekumordzie@gmail.com'}?subject=${formData.subject}&body=${formData.message + ' ' + ' - ' + formData.email}`
    }
    return (
        <motion.section ref={ref} id='contact' className='bg-[#1f2725] w-full h-screen snap-center relative flex flex-col text-center md:text-left items-center justify-center mx-auto  overflow-hidden'>
            <motion.h3
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className='absolute top-10 uppercase md:tracking-[4rem] tracking-[1rem] text-xs font-light text-teal-500 flex justify-center  w-full'
            >
                Contact
            </motion.h3>
            <div className='flex flex-col space-y-10 px-10'>

                <div className='poiret text-lg font-light text-center whitespace-[wrap] text-gray-400 tracking-[2px]'>
                    <span className=''>I have got just what you need{' '}</span>
                    <span className='underline decoration-[#FA0]/50'>
                        Lets Talk.
                    </span>
                </div>

                <div className='space-y-10 backdrop-blur-[5px] border-l-4 bg-[#cccccc0a] pl-4 border-teal-900/75 py-2  rounded-md '>
                    <div className='flex items-center space-x-5 justify-start  relative '>
                        <PhoneIcon className='text-[black] h-11 w-11 animate-pulse bg-gray-100/10 p-2 rounded-lg' />
                        <div className='space-y-1 text-justify'> 
                            <span className='capitalize text-sm font-semibold text-[#ccc] '>phone</span>
                            <p className='text-sm font-medium text-gray-500'>{pageInfo?.phoneNumber} </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5 justify-start  relative'>
                        <EnvelopeIcon className='text-[black] h-11 w-11 animate-pulse bg-gray-100/10 p-2 rounded-lg' />
                        <div className='space-y-1 text-justify'>
                            <span className='capitalize text-sm font-semibold  text-[#ccc] '>email</span>
                            <p className='text-sm font-medium text-gray-500'>{pageInfo?.email} </p>
                        </div>
                    </div>
                    <div className='flex items-center space-x-5 justify-start  relative'>
                        <MapPinIcon className='text-[black] h-11 w-11 animate-pulse bg-gray-100/10 p-2 rounded-lg' />
                        <div className='space-y-1 text-justify'>
                            <span className='capitalize text-sm font-semibold text-[#ccc] '>Location</span>
                            <p className='text-sm font-medium text-gray-500'>{pageInfo?.address} </p>
                        </div>
                    </div>

          
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto '>
                    <div className='flex space-x-2 w-full '>
                        <input {...register('name')} name='name' placeholder='Name' className='contact-input w-1/2' type={'text'} />
                        <input {...register('email')} name='email' placeholder='Email' className='contact-input w-1/2' type={'email'} />
                    </div>

                    <input {...register('subject')} name='subject' placeholder='Subject' className='contact-input' type={'text'} />
                    <textarea {...register('message')} name='message' placeholder='Message' className='contact-input' />
                    <button type='submit' className='bg-teal-500 py-5 px-10 rounded-sm text-white font-thin text-lg' >
                        Submit
                    </button>
                </form>
            </div>
        </motion.section>
    )
}

export default Contact