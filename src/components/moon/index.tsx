import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';

export function Moon3D(props: any) {
  const groupRef = useRef<THREE.Mesh>(null)
  const {materials} = useGLTF('/moon.glb');
  const [colorMap, displacementMap] = useLoader(THREE.TextureLoader, [
    '/color.jpg',
    '/texture.jpg',
  ])

  const [spring, api] = useSpring(() => ({
    scale: [0, 0, 0],
    config: { tension: 170, friction: 26 },
  }));

  useEffect(() => {
    api.start({ scale: [3, 3, 3], delay: 350 });
  }, [api]);

  useEffect(() => {

  }, [])
  useFrame(({clock}) => {
    groupRef.current!.rotation.y = clock.elapsedTime / 7
    // groupRef.current!.
  })

  return (
    <animated.group scale={spring.scale} {...props} dispose={null}>
      <mesh  
        castShadow
        receiveShadow
        material={materials.moon}
        ref={groupRef}
      >
        <sphereGeometry args={[1, 128, 128]} />
        <meshStandardMaterial displacementScale={0.002} roughness={0.9} map={colorMap} bumpMap={colorMap} displacementMap={displacementMap} />
      </mesh>
      <pointLight intensity={100} distance={1} color={'#ffffff'} />
      <directionalLight intensity={2.5} position={[1, 1, 1]} />
    </animated.group>
  )
}

useGLTF.preload('/moon.glb')