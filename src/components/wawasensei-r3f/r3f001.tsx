'use client'
import { Canvas } from '@react-three/fiber'

import Frame from '@/components/Frame'
import { OrbitControls } from '@react-three/drei'

export default function R3f001() {
  return (
    <Frame date="2024-12-25">
      <Canvas camera={{ position: [1, 2, 3] }}>
        <OrbitControls />
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </Frame>
  )
}
