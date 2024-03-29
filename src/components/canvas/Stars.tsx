'use client'

import { PerspectiveCamera, PointMaterial, Points, Preload } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as random from 'maath/random'
import dynamic from 'next/dynamic'
import { Suspense, useRef, useState } from 'react'
import { CanvasLoader } from '../dom'

const View = dynamic(() => import('@/components/canvas').then((mod) => mod.View), {
  ssr: false,
})

const Stars = () => {
  const ref = useRef<THREE.Points>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }))

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled>
        <PointMaterial transparent color='#f272c8' size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
    <View className='absolute inset-0 z-[-10] h-auto w-full'>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault position={[0, 0, 1]} />
        <Stars />
      </Suspense>
    </View>
  )
}

export default StarsCanvas
