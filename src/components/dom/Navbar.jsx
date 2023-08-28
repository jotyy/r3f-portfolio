'use client'

import { useEffect, useState } from 'react'

import { close, logo, menu } from '@/assets'
import { navLinks } from '@/constants'
import { styles } from '@/styles'
import Image from 'next/image'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? 'bg-primary' : 'bg-transparent'
      }`}
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between'>
        <a
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <Image src={logo} alt='logo' className='h-9 w-9 rounded-full border border-white object-contain' />
          <p className='flex cursor-pointer text-[18px] font-bold text-white '>
            Joshua &nbsp;
            <span className='hidden sm:block'> | Keep Coding</span>
          </p>
        </a>

        <ul className='hidden list-none flex-row gap-10 sm:flex'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-white' : 'text-light'
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`flex cursor-pointer items-center gap-2 text-[18px] font-medium text-light hover:text-white hover:underline`}
          >
            <a href='https://blog.cppo.asia'>Posts</a>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
              />
            </svg>
          </li>
        </ul>

        <div className='flex flex-1 items-center justify-end sm:hidden'>
          <Image
            src={toggle ? close : menu}
            alt='menu'
            className='h-[28px] w-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } black-gradient absolute right-0 top-20 z-20 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className='flex flex-1 list-none flex-col items-start justify-end gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? 'text-white' : 'text-light'
                  }`}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(nav.title)
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
                className={`flex cursor-pointer items-center gap-2 text-[18px] font-medium text-light hover:text-white hover:underline`}
              >
                <a href='https://blog.cppo.asia'>Posts</a>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
