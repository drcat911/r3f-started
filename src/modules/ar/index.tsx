import {Canvas, useLoader} from "@react-three/fiber";
import {Center, Environment, Float, MeshTransmissionMaterial, OrbitControls, Preload, Text3D} from "@react-three/drei";
import {RGBELoader} from "three-stdlib";
import {useControls} from 'leva'
import * as THREE from 'three';

import s from './styles.module.scss';
import Rig from "@/components/canvas/Rig";
import {VRButton, XR} from "@react-three/xr";

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
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')

  return (
    <div className={s.container}>
      <VRButton />
      <Canvas shadows camera={{position: [0, 1, 5], fov: 45}} gl={{preserveDrawingBuffer: true}}>
        {/*<OrbitControls />*/}
        <XR>
        <fog attach="fog" args={[bg, 10, 50]}/>
        <color attach="background" args={[bg]}/>
        <ambientLight intensity={0.5}/>
        {/*<Float speed={3} floatIntensity={.3}>*/}
        <Center>
          <Text3D
            castShadow={true}
            bevelEnabled
            font={'/font/Manrope_Bold.json'}
            scale={1}
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
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0,-.5,0]}>
          <planeGeometry args={[100, 100]} />
          <meshBasicMaterial color="#000000" side={THREE.DoubleSide} />
        </mesh>
        <Environment preset="forest"/>
        {/*<Rig/>*/}
        </XR>
        <Preload all/>
      </Canvas>
    </div>
  )
}
