"use client"

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

export function Moon3D(props: any) {
  const groupRef = useRef<THREE.Group>(null)
  const { nodes, materials } = useGLTF('/moon-2.glb') as any;

  useEffect(() => {
    if (nodes.Node1.geometry) {
      nodes.Node1.geometry.computeBoundingBox();
      const boundingBox = nodes.Node1.geometry.boundingBox;
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      nodes.Node1.geometry.translate(-center.x, -center.y, -center.z);
    }
  }, [nodes]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsedTime / 3.5

      // Animate scale with easing
      const scale = Math.min(elapsedTime / 2, 1)
      const easedScale = easeInOutQuad(scale) // Apply easing function
      groupRef.current.scale.set(easedScale, easedScale, easedScale)
    }
  })

  // Easing function
  function easeInOutQuad(t: number) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  }

  return (
    <group {...props} ref={groupRef} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Node1.geometry}
        material={materials['Astronaut 02']}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          attach="material"
          {...materials['Astronaut 02']}
          emissive={new THREE.Color(0x000000)}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/moon.gltf')