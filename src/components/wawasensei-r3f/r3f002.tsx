'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

export default function R3f001() {
  return (
    <Canvas camera={{ position: [1, 2, 3] }}>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}
