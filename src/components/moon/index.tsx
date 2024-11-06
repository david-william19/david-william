"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Moon3D(props: any) {
  const { nodes, materials } = useGLTF('./moon.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Node1 as THREE.Mesh).geometry}
        material={materials['Astronaut 02']}
      />
    </group>
  )
}

useGLTF.preload('/moon.gltf')