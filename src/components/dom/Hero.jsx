'use client'

import { motion } from 'framer-motion'

import { styles } from '@/styles'
import Image from 'next/image'
import Community from './Community'

const Hero = () => {
  return (
    <section className={`relative mx-auto h-screen w-full overflow-hidden`}>
      <div
        className={`absolute inset-0 mx-auto max-w-7xl ${styles.paddingX} flex flex-col items-center justify-center gap-5 md:flex-row`}
      >
        <div className='relative'>
          <Image
            loading='lazy'
            width={150}
            height={150}
            alt='man astronaut'
            src='/img/man-astronaut.webp'
            className='z-10'
          />
          <div className='absolute inset-x-0 -bottom-1/4 h-96 w-96 animate-blob rounded-full bg-brand opacity-20 blur-3xl'></div>
        </div>
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I&apos;m <span className='text-brand'>Joshua</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full-stack developer, Architect
            <br />
            TypeScript enthusiast, DevOps, Blockchain practitioner
          </p>
          <Community />
        </div>
      </div>

      <div className='absolute bottom-12 z-10 flex w-full items-center justify-center md:bottom-16'>
        <a href='#about' aria-label='scroll'>
          <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-light p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='mb-1 h-3 w-3 rounded-full bg-light'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
