'use client'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/dom').then((mod) => mod.Navbar), { ssr: false })
const Hero = dynamic(() => import('@/components/dom').then((mod) => mod.Hero), { ssr: false })
const About = dynamic(() => import('@/components/dom').then((mod) => mod.About), { ssr: false })
const Experience = dynamic(() => import('@/components/dom').then((mod) => mod.Experience), { ssr: false })
const Tech = dynamic(() => import('@/components/dom').then((mod) => mod.Tech), { ssr: false })
const Works = dynamic(() => import('@/components/dom').then((mod) => mod.Works), { ssr: false })
const Contact = dynamic(() => import('@/components/dom').then((mod) => mod.Contact), { ssr: false })
const StarsCanvas = dynamic(() => import('@/components/dom').then((mod) => mod.StarsCanvas), { ssr: false })

export default function Page() {
  return (
    <>
      <div className='relative bg-darkest'>
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <StarsCanvas />
          <Contact />
        </div>
      </div>
    </>
  )
}
