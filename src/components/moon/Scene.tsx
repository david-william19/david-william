"use client"

import { Canvas } from "@react-three/fiber"
import { Moon3D } from "."

export default function Scene() {

  return (
    <Canvas>
      <ambientLight intensity={0.3} /> {/* Lower ambient light intensity */}
      <hemisphereLight intensity={0.5} groundColor={0x444444} /> {/* Add hemisphere light for more natural lighting */}
      <pointLight intensity={5} position={[5, 5, 5]} castShadow /> {/* Ensure point light casts shadows */}
      <Moon3D />
    </Canvas>
  )
}