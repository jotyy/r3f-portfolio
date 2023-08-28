'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import { HeroChallengeCard } from './HeroCard'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Balancer } from 'react-wrap-balancer'

const Hero = () => {
  const isMobile = useIsMobile()
  return (
    <section className='mx-auto min-h-screen w-full overflow-hidden lg:min-h-0'>
      <div className='container grid min-h-screen items-center justify-center lg:min-h-0 lg:grid-cols-2'>
        <div className='flex w-full flex-col items-center justify-center gap-10 lg:items-start'>
          <div className='relative flex w-full items-center justify-center gap-4 lg:justify-start'>
            <div className='absolute left-1/2 top-1/2 -z-10 hidden h-56 w-56 translate-x-[-15%] translate-y-[-50%] rounded-full bg-slate-400/10 blur-3xl dark:block' />
            <div className='absolute right-1/2 top-1/2 -z-10 hidden h-56 w-56 translate-y-[-40%] rounded-full bg-[#3178c6]/20 blur-3xl dark:block' />
            <Image
              loading='lazy'
              width={150}
              height={150}
              alt='man astronaut'
              src='/img/man-astronaut.webp'
              className='z-10'
            />
            <h1 className='bg-gradient-to-r from-brand to-black bg-clip-text text-6xl font-extrabold text-transparent dark:to-white sm:text-6xl sm:leading-[5.5rem]'>
              Hi 👋
              <br />
              I&apos;m Joshua
            </h1>
          </div>

          <p className='max-w-[55ch] bg-transparent px-8 text-center font-medium leading-8 text-black/50 dark:text-white/50 lg:px-0 lg:text-left'>
            <Balancer>
              Full-stack developer, Architect
              <br />
              TypeScript enthusiast, DevOps, Blockchain practitioner
            </Balancer>
          </p>
          <div className='flex gap-3'>
            <a
              href='https://twitter.com/jotyy3'
              target='_blank'
              aria-label='twitter link'
              className='community-icon group relative mx-auto hidden w-fit overflow-hidden rounded-xl p-[1px] font-bold transition-all duration-300 dark:block dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8] md:mr-0 lg:mr-auto'
            >
              <span className='inline-flex h-full w-fit items-center gap-1 rounded-xl p-2 transition-all duration-300 dark:bg-neutral-900 dark:text-white group-hover:dark:bg-black'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='-2 -2 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path
                    fill='currentColor'
                    stroke='none'
                    d='M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z'
                  />
                </svg>
              </span>
            </a>
            <a
              href='https://github.com/jotyy'
              target='_blank'
              aria-label='github link'
              className='community-icon group relative mx-auto hidden w-fit overflow-hidden rounded-xl p-[1px] font-bold transition-all duration-300 dark:block dark:hover:shadow-[0_0_2rem_-0.5rem_#fff8] md:mr-0 lg:mr-auto'
            >
              <span className='inline-flex h-full w-fit items-center gap-1 rounded-xl p-2 transition-all duration-300 dark:bg-neutral-900 dark:text-white group-hover:dark:bg-black'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                  <path d='M9 18c-4.51 2-5-2-7-2' />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {!isMobile && (
          <div className='relative hidden h-[800px] overflow-visible rounded-full lg:block'>
            <div className='absolute -inset-40 top-1/2 -z-30 -translate-y-1/2 translate-x-[-30px] overflow-hidden rounded-full'>
              <div className='relative h-full w-full'>
                <motion.div
                  animate={{ opacity: 1 }}
                  className='moving-grid-background absolute h-[200%] w-full'
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                />
                <div className='absolute h-full w-full rounded-full shadow-[inset_0_0_5rem_3rem]' />
              </div>
            </div>
            <motion.div
              animate={{
                y: 140,
                opacity: 1,
                transition: {
                  duration: 0.4,
                },
              }}
              className='group'
              initial={{
                y: 150,
                x: 180,
                opacity: 0,
              }}
            >
              <HeroChallengeCard
                username='jotyy'
                className='absolute'
                difficulty='Developer'
                prompt=''
                title='Made with ❤️ by jotyy'
              />
            </motion.div>
            <motion.div
              animate={{
                y: 260,
                opacity: 1,
                transition: {
                  duration: 0.4,
                  delay: 0.1,
                },
              }}
              className='group'
              initial={{
                opacity: 0,
                y: 270,
                x: 80,
              }}
            >
              <HeroChallengeCard
                username='tailwind'
                className='absolute'
                difficulty='Next.js'
                prompt='Built with Next.js and Tailwind CSS'
                title='About this site'
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
