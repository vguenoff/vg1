'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

export default function R3f001() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <OrbitControls />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      <group rotation-x={Math.PI / 4} position={[0, -1, 1]}>
        <mesh position-x={1}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh scale-y={2}>
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position={[-1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
      </group>
    </Canvas>
  )
}
