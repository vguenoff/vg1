'use client'
import { Canvas } from '@react-three/fiber'

import { OrbitControls } from '@react-three/drei'

export default function R3f001() {
  return (
    <>
      <Canvas camera={{ position: [1, 1, 3] }}>
        <OrbitControls />
        <mesh>
          <sphereGeometry />
          <meshToonMaterial color="green" />
        </mesh>
        <mesh position-z={0.6}>
          <boxGeometry />
          <meshToonMaterial color="green" />
        </mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 3]} intensity={1} />
        <directionalLight position={[0, 3, 3]} intensity={0.5} />
      </Canvas>
      <p>
        <strong>Vertices</strong> are connected by
        <strong> edges</strong> to form
        <strong> faces</strong>.
      </p>
    </>
  )
}
