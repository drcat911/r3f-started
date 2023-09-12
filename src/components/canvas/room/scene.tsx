/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 room.glb --transform --simplify
Files: room.glb [12.64MB] > room-transformed.glb [492.99KB] (96%)
Author: Rida.Sidi.Ben.Ali (https://sketchfab.com/Rida.Sidi.Ben.Ali)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/naruto-sala-examen-chunnin-e2d7e1d570534b1ea7872992e5e3be8c
Title: naruto Sala Examen Chunnin
*/

import React, {useEffect, useRef} from 'react'
import {useGLTF} from '@react-three/drei'
import *  as THREE from 'three';

export function RoomModel(props) {
  const {nodes, materials} = useGLTF('/models/room-transformed.glb');

  for (const key in materials) {
    const tmp = materials[key];
    // materials[key] = new THREE.MeshStandardMaterial({map: materials[key].map, color: materials[key].color});

    materials[key].roughness = 1;
    materials[key].metalness = 0;
    materials[key].emissive = new THREE.Color(0x000000);
    materials[key].color = new THREE.Color(0x000000)
  }

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['25_Mesh40_0_0_0_25_Mesh31_0_0_0_0'].geometry} material={materials['25_Mesh31_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh9_0_0_0_24_Mesh9_0_0_0_0'].geometry} material={materials['24_Mesh9_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh8_0_0_0_24_Mesh8_0_0_0_0'].geometry} material={materials['24_Mesh8_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh7_0_0_0_24_Mesh7_0_0_0_0'].geometry} material={materials['24_Mesh7_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh5_0_0_0_24_Mesh5_0_0_0_0'].geometry} material={materials['24_Mesh5_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh4_0_0_0_24_Mesh4_0_0_0_0'].geometry} material={materials['24_Mesh4_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh43_0_0_0_24_Mesh14_0_0_0_0'].geometry} material={materials['24_Mesh14_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh37_0_0_0_24_Mesh37_0_0_0_0'].geometry} material={materials['24_Mesh37_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh34_0_0_0_24_Mesh34_0_0_0_0'].geometry} material={materials['24_Mesh34_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh30_0_0_0_24_Mesh30_0_0_0_0'].geometry} material={materials['24_Mesh30_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh28_0_0_0_24_Mesh27_0_0_0_0'].geometry} material={materials['24_Mesh27_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh26_0_0_0_24_Mesh26_0_0_0_0'].geometry} material={materials['24_Mesh26_0_0_0']}
            position={[-1.065, 8.294, 41.048]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh24_0_0_0_24_Mesh23_0_0_0_0'].geometry} material={materials['24_Mesh23_0_0_0']}
            position={[-1.057, 7.836, 48.448]} rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
      <mesh geometry={nodes['24_Mesh1_0_0_0_root_root_24_Mesh1_0_0_0_root_root_0'].geometry}
            material={materials['24_Mesh1_0_0_0_root_root']} position={[-1.065, 8.294, 41.048]}
            rotation={[-Math.PI / 2, 0, 0]} scale={0.119}/>
    </group>
  )
}

useGLTF.preload('/models/room-transformed.glb')