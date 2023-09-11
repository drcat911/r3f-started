import {Canvas, useLoader} from "@react-three/fiber";
import {
  AccumulativeShadows,
  Center,
  ContactShadows,
  Environment,
  Float, Lightformer, MeshReflectorMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
  Preload, RandomizedLight,
  Text3D
} from "@react-three/drei";
import {RGBELoader} from "three-stdlib";
import {useControls} from 'leva'
import * as THREE from 'three';

import s from './styles.module.scss';
import Rig from "@/components/canvas/Rig";

export default function Homepage() {


  const {autoRotate, text, shadow, ...config} = useControls({
    text: 'Inter',
    backside: true,
    backsideThickness: {value: 0.3, min: 0, max: 2},
    samples: {value: 16, min: 1, max: 32, step: 1},
    resolution: {value: 1024, min: 64, max: 2048, step: 64},
    transmission: {value: 1, min: 0, max: 1},
    clearcoat: {value: 0, min: 0.1, max: 1},
    clearcoatRoughness: {value: 0.0, min: 0, max: 1},
    thickness: {value: 0.3, min: 0, max: 5},
    chromaticAberration: {value: 5, min: 0, max: 5},
    anisotropy: {value: 0.3, min: 0, max: 1, step: 0.01},
    roughness: {value: 0, min: 0, max: 1, step: 0.01},
    distortion: {value: 0.5, min: 0, max: 4, step: 0.01},
    distortionScale: {value: 0.1, min: 0.01, max: 1, step: 0.01},
    temporalDistortion: {value: 0, min: 0, max: 1, step: 0.01},
    ior: {value: 1.5, min: 0, max: 2, step: 0.01},
    color: '#ff9cf5',
    gColor: '#ff7eb3',
    shadow: '#750d57',
    autoRotate: false
  })

  const bg = '#111111';
  const  font = './font/Manrope_Bold.json';
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

  return (
    <div className={s.container}>
      <Canvas shadows camera={{position: [0, 3, 5], fov: 45}} gl={{preserveDrawingBuffer: true}}>
        {/*<OrbitControls />*/}
        <fog attach="fog" args={[bg, 10, 50]}/>
        <color attach="background" args={[bg]}/>
        <ambientLight intensity={2.5}/>
        {/*<Float speed={3} floatIntensity={.3}>*/}

        <Center scale={[0.8, 1, 1]} front top >
          <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={5}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}>
            {`<ht.Dev/>`}
            <MeshTransmissionMaterial {...config} background={texture}/>
          </Text3D>
        </Center>
        {/*</Float>*/}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -.51, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="#050505"
            metalness={0.5}
          />
        </mesh>

        {/*<mesh*/}
        {/*  rotation={[0, 0, -1]} position={[0, 0, 0]}>*/}
        {/*  <planeGeometry args={[100, 100]}/>*/}
        {/*  <meshStandardMaterial castShadow={true} color={bg} side={THREE.DoubleSide}/>*/}
        {/*</mesh>*/}
        {/*<Environment resolution={32}>*/}
        {/*  <group rotation={[-Math.PI / 4, -0.3, 0]}>*/}
        {/*    <Lightformer intensity={20} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />*/}
        {/*    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />*/}
        {/*    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[10, 2, 1]} />*/}
        {/*    <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[20, 2, 1]} />*/}
        {/*    <Lightformer type="ring" intensity={2} rotation-y={Math.PI / 2} position={[-0.1, -1, -5]} scale={10} />*/}
        {/*  </group>*/}
        {/*</Environment>*/}
        <Environment preset="forest"/>
        {/*<AccumulativeShadows frames={100} color={shadow} colorBlend={5} toneMapped={true} alphaTest={0.9} opacity={1}*/}
        {/*                     scale={30} position={[0, -1.01, 0]}>*/}
        {/*  <RandomizedLight amount={4} radius={10} ambient={0.5} intensity={1} position={[0, 10, -10]} size={15}*/}
        {/*                   mapSize={1024} bias={0.0001}/>*/}
        {/*</AccumulativeShadows>*/}
        {/*<ContactShadows smooth={false} scale={100} position={[0, -5.05, 0]} blur={0.5} opacity={0.75}/>*/}
        <Rig/>
        <Preload all/>
      </Canvas>
    </div>
  )
}
