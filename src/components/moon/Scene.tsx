"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { useProgress, Html } from "@react-three/drei"
import { Moon3D } from "."

function Loader() {
  const { progress } = useProgress()

  return <Html center>{progress.toFixed(1)}</Html>
}

export default function Scene() {
  return (
    <Canvas>
      <directionalLight position={[-2, -8, 2]} intensity={4} />
      <Suspense fallback={<Loader />}>
          <Moon3D />
      </Suspense>
    </Canvas>
  )
}