import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'
import Link from 'next/link';
import { Social } from '../../typings';

type Props = {
  socials: Social[]
}

function Header({ socials }: Props) {
  //create custom motion for social icons in typescript
  const socialVariant = {
    hidden: {
      opacity: 0,
      x: -40
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.2,

      }
    }
  }
  const socialRightVariant = {
    hidden: {
      opacity: 0,
      x: 30
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        mass: 0.2,

      }
    }
  }
  return (
    <header className='px-5 xl:p-5  sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto md:items-center z-50'>
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.085 } }
        }}
        initial='hidden'
        animate='show'
        className='flex items-start flex-row'
      >
        {
          socials.map((social, index) => (
            <motion.div key={social?._id} variants={socialVariant}>
              <SocialIcon url={social?.url} fgColor='gray' bgColor='transparent' />
            </motion.div>

          ))
        }

      </motion.div>
      <Link href={'#contact'}>
        <motion.div variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.085 } }
        }}
          initial='hidden'
          animate='show'
          className='flex items-center flex-row cursor-pointer '
        >
          <motion.div variants={socialRightVariant}>
            <SocialIcon network='email' fgColor='gray' bgColor='transparent' />
          </motion.div>
        </motion.div>
      </Link>


    </header >
  )
}

export default Header