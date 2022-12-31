import React from 'react'
import { comeUp } from '../../animations/comeUp'
import { pageTransition } from '../../animations/pageTransition'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { PageInfo } from '../../typings'

type Props = {
    pageInfo: PageInfo
}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string

}
const Contact = ({pageInfo}: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    
    const onSubmit:SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=${formData.message}`
    }
    return (
        <motion.section id='contact' className='h-screen snap-center relative flex flex-col text-center md:text-left items-center justify-evenly mx-auto max-w-7xl overflow-hidden'>
            <motion.h3
                initial={comeUp.initial}
                whileInView={comeUp.whileInView}
                className='absolute top-10  uppercase tracking-[20px] text-xl font-light text-teal-500'
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

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[teal] h-7 w-7 animate-pulse' />
                        <p>{pageInfo?.phoneNumber} | {pageInfo?.alternativePhoneNumber}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[teal] h-7 w-7 animate-pulse' />
                        <p>{pageInfo?.email}</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[teal] h-7 w-7 animate-pulse' />
                        <p>{pageInfo?.address}</p>
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