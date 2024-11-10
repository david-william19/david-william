"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import {animated} from "@react-spring/three"

export function Moon3D() {
  const group = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('moon.gltf')
  // const {rotation} = useSpring<{rotation: [number, number, number]}>({
  //   rotation: [Math.PI, Math.PI, 0],
  //   config: {
  //     mass: 1,
  //     tension: 170,
  //     friction: 12
  //   }
  // })

  // animation

  return (
    <group ref={group} dispose={null}>
      <animated.mesh
        castShadow
        receiveShadow
        scale={10}
        position={[0, -5, 0]}
        geometry={(nodes.Node1 as THREE.Mesh).geometry}
        material={materials['Astronaut 02']}
      />
    </group>
  )
}

useGLTF.preload('/moon.gltf')