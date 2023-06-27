'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '@/styles'
import { github } from '@/assets'
import { SectionWrapper } from '@/hoc'
import { projects } from '@/constants'
import { fadeIn, textVariant } from '@/utils/motion'
import Image from 'next/image'

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='w-full rounded-2xl bg-darkest p-5 shadow-card sm:w-[360px]'
      >
        <div className='relative h-[230px] w-full'>
          <Image src={image} alt='project_image' className='h-full w-full rounded-2xl object-cover' />

          <div className='absolute inset-0 m-3 flex justify-end'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient invisible flex h-10 w-10 cursor-pointer items-center justify-center rounded-full'
            >
              <Image src={github} alt='source code' className='h-1/2 w-1/2 object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[24px] font-bold text-white'>{name}</h3>
          <p className='mt-2 text-[14px] text-light'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='flex w-full'>
        <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-3 max-w-3xl text-[17px] leading-[30px] text-light'>
          Following projects showcases my mastery of different technology stacks and practical experience, as well as my
          ability to solve complex problems.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
