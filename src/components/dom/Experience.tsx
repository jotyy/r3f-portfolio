'use client'

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '@/styles'
import { Experience, experiences } from '@/constants'
import { SectionWrapper } from '@/hoc'
import { textVariant } from '@/utils/motion'
import Image from 'next/image'

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#27375E',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #27375E' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex h-full w-full items-center justify-center'>
          <Image src={experience.icon} alt={experience.company_name} className='h-[60%] w-[60%] object-contain' />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold text-white'>{experience.title}</h3>
        <p className='text-[16px] font-semibold text-light' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className='text-[14px] font-semibold text-white-100' style={{ margin: 2 }}>
          {experience.job_description}
        </p>
      </div>

      <ul className='ml-5 mt-5 list-disc space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='pl-1 text-[14px] tracking-wider text-white-100'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
