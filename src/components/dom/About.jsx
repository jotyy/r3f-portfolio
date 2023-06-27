'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/styles'
import { services } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image'

const ServiceCard = ({ index, title, icon }) => (
  <div className='w-full xs:w-[250px]'>
    <Tilt>
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full rounded-[20px] bg-gradient-to-b from-brand to-purple-400 p-[1px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-darkest px-12 py-5'
        >
          <Image src={icon} alt='web-development' className='h-16 w-16 object-contain' />

          <h3 className='text-center text-[20px] font-bold text-white'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  </div>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 max-w-3xl text-[17px] leading-[30px] text-light'>
        I am a full-stack engineer with rich practical experience in frameworks such as React, Flutter, Node.js, and
        Ethers.js. I lead teams to create efficient and scalable solutions to various software development problems
        through close collaboration.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
