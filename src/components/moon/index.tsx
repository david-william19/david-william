"use client"

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function Moon3D(props: any) {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF('/moon-2.glb')

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsedTime / 3.5
    }
  })

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <primitive position={[0, -0.2, 0]} object={scene} scale={6} />
    </group>
  )
}

useGLTF.preload('/moon.gltf')