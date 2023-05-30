'use client'

import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

import dynamic from 'next/dynamic'
import { CanvasLoader } from '../dom'

const View = dynamic(() => import('@/components/canvas').then((mod) => mod.View), {
  ssr: false,
})

export const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')

  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
}

const EarthCanvas = () => {
  return (
    <View className='h-full w-full'>
      <Suspense fallback={<CanvasLoader />}>
        <PerspectiveCamera makeDefault fov={45} near={0.1} far={200} position={[-4, 3, 6]} />
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

        <Earth />
      </Suspense>
    </View>
  )
}

export default EarthCanvas
