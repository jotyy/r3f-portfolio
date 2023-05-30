import { Canvas } from '@react-three/fiber'
import { r3f } from '@/helpers/global'
import { Preload } from '@react-three/drei'

export default function Scene({ ...props }) {
  return (
    <Canvas {...props}>
      <r3f.Out />
      <Preload all />
    </Canvas>
  )
}
