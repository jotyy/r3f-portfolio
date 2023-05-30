'use client'

import React from 'react'

import { BallCanvas } from '@/components/canvas'
import { SectionWrapper } from '@/hoc'
import { technologies } from '@/constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='h-28 w-28' key={technology.name}>
          <BallCanvas icon={technology.icon.src} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '')
