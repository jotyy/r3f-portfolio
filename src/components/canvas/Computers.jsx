'use client'

import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

import { CanvasLoader } from '../dom'

const View = dynamic(() => import('@/components/canvas').then((mod) => mod.View), {
  ssr: false,
})

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc.glb')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <View className='absolute h-[calc(100vh-100px)] w-screen'>
      <Suspense fallback={<CanvasLoader />}>
        <Computers isMobile={isMobile} />
        <PerspectiveCamera makeDefault position={[20, 3, 5]} fov={25} />
        <OrbitControls autoRotate={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      </Suspense>
    </View>
  )
}

export default ComputersCanvas
