import React from 'react'

const Community = () => {
  return (
    <div className='mt-6 flex flex-row space-x-4'>
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
            stroke-linecap='round'
            stroke-linejoin='round'
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
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
            <path d='M9 18c-4.51 2-5-2-7-2' />
          </svg>
        </span>
      </a>
    </div>
  )
}

export default Community
