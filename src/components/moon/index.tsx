import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { ThreeElements, useFrame, useLoader } from '@react-three/fiber';
import { useSpring, animated, SpringValue } from '@react-spring/three';

export function Moon3D(props: ThreeElements['group']) {
  const groupRef = useRef<THREE.Mesh>(null)
  const {materials} = useGLTF('/moon.glb');
  const [colorMap, displacementMap] = useLoader(THREE.TextureLoader, [
    '/color.jpg',
    '/texture.jpg',
  ])

  const [spring, api] = useSpring(() => ({
    scale: [2.9, 2.9, 2.9],
    config: { mass: 1, tension: 100, friction: 1, precision: 0.01, duration: 800 },
  }));

  useLayoutEffect(() => {
    api.start({ scale: [3, 3, 3], delay: 2500 });
  }, [api]);

  useFrame(({clock}) => {
    groupRef.current!.rotation.y = clock.elapsedTime / 10
  })

  return (
    <animated.group scale={spring.scale as SpringValue} {...props} dispose={null}>
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