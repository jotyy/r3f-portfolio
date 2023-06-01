'use client'

import React from 'react'
import { Tilt } from 'react-tilt'
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
        className='bg-gradient-to-b from-brand to-purple-400 w-full rounded-[20px] p-[1px] shadow-card'
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
        <h2 className={styles.sectionHeadText}>关于我</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 max-w-3xl text-[17px] leading-[30px] text-light'>
        我是一名全栈工程师，熟练掌握TS、JS、Dart和Kotlin等语言，并且有React、Flutter、Node.js和Ethers.js等框架的丰富实践经验。同时我也是一名研发经理，带领团队密切合作，以创建高效，可扩展的解决方案，解决软件开发的各种问题。
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
