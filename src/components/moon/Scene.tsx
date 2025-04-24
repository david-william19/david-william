import { Canvas } from "@react-three/fiber"
import { Moon3D } from "."
import { Suspense } from "react"

export default function Scene() {

  return (
    <Canvas style={{
      width: "350px",
      height: "350px",
      marginInline: "auto",
    }}>
      <Suspense fallback={null}>
        <Moon3D />
      </Suspense>
    </Canvas>
  )
}