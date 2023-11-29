'use client'

import { Decal, Float, useTexture } from '@react-three/drei'
import { Suspense } from 'react'

import dynamic from 'next/dynamic'
import { CanvasLoader } from '../dom'

const View = dynamic(() => import('@/components/canvas').then((mod) => mod.View), {
  ssr: false,
})

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const [decal] = useTexture([imgUrl])

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* <OrbitControls enableZoom={false} /> */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color='#fff8eb' polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={decal} />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon }: { icon: string }) => {
  return (
    <View className='h-28 w-28'>
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>
    </View>
  )
}

export default BallCanvas
