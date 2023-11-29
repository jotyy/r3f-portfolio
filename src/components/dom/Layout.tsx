'use client'

import { useRef } from 'react'
import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false })

const Layout = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div ref={ref} className='relative w-full h-full overflow-auto touch-auto'>
      {children}
      <Scene
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }}
        eventSource={ref}
        eventPrefix='client'
      />
    </div>
  )
}

export default Layout
