import {Canvas, useFrame, useLoader, extend, useThree} from "@react-three/fiber";
import {
  Center,
  Environment,
  Grid,
  MeshReflectorMaterial,
  OrbitControls,
  Preload,
  Stage,
  useTexture,
  Effects, useGLTF, Float
} from "@react-three/drei";
import {gsap} from 'gsap';

import React, {useEffect, useRef} from "react";
import {NarutoModel} from "@/components/canvas/naruto/scene";
import {Bloom, EffectComposer, SSR, LUT} from "@react-three/postprocessing";
import {FilmPass, WaterPass, UnrealBloomPass, LUTPass, LUTCubeLoader, RGBELoader} from "three-stdlib";
import {RoomModel} from "@/components/canvas/room/scene";

extend({WaterPass, UnrealBloomPass, FilmPass, LUTPass})

export default function ErgoModule() {

  const refLi = useRef();
  const refLi2 = useRef();
  const refLi3 = useRef();
  const texture = useLoader(RGBELoader, '/models/aerodynamics_workshop_1k.hdr');
  const Floor = () => (
    <mesh position={[0, 0, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]}/>
      <MeshReflectorMaterial
        blur={[300, 50]}
        resolution={1920}
        mixBlur={1}
        mixStrength={50}
        roughness={.9}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={.4}
        color="#111111"
        metalness={.9}
      />
    </mesh>
  )
  const {nodes, materials} = useGLTF('/models/naruto_sage_mode-transformed.glb');
  useEffect(() => {
    gsap.fromTo(refLi.current, {intensity: 0}, {intensity: 100, ease: 'power3.inOut', duration: 5});
    gsap.fromTo(refLi2.current, {intensity: 0}, {intensity: 300, ease: 'power3.inOut', duration: 5});
    gsap.fromTo(refLi3.current, {intensity: 0}, {intensity: 20, ease: 'power3.inOut', duration: 5});
  }, [refLi,refLi2, refLi3])

  return (
    <Canvas shadows gl={{antialias: false, stencil: false}} camera={{position: [0, 0, 10], fov: 45}}>
      <ambientLight ref={refLi} intensity={0} color='#ffffff'/>
      <pointLight
        ref={refLi2}
        distance={5000} intensity={0} color="lightblue"
        position={[0, 5, -8]}
      />
      <fog attach="fog" args={['black', 15, 0]}/>
      <Center position={[0, 2.7, 0]}>
        <RoomModel scale={5}/>
      </Center>
      <group position={[0, -2, 0]}>
        <Floor/>
        <pointLight ref={refLi3} distance={10} intensity={0} color="lightblue">
          <mesh scale={.0003} geometry={nodes.Object_2.geometry} position={[0, 0, 1]} rotation={[-Math.PI / 2, 0, 0]}/>
        </pointLight>
        <NarutoModel scale={.0003} position={[-1.5, 0, 0]}/>
        <NarutoModel scale={.0003} position={[1.5, 0, 0]}/>
      </group>
      <SEffects/>
      <Rig/>
      <IntroAnimation />
      <Preload all/>
    </Canvas>
  )
}

function IntroAnimation() {
  const camera = useThree(state => state.camera)
  useEffect(() => {
    gsap.fromTo(camera.position, {z: 26}, {z: 10, ease: 'power3.inOut', duration: 5});
  }, [camera])
}

function Rig() {
  useFrame((state) => {
    state.camera.position.lerp({x: state.pointer.x * 2, y: -state.pointer.y, z: state.camera.position.z}, 0.1)
    state.camera.lookAt(0, 0, 0)
  })
}

function SEffects() {
  const data = useLoader(LUTCubeLoader, '/models/F-6800-STD.cube')
  const {enabled, ...props} = {
    enabled: true,
    temporalResolve: true,
    STRETCH_MISSED_RAYS: true,
    USE_MRT: true,
    USE_NORMALMAP: true,
    USE_ROUGHNESSMAP: true,
    ENABLE_JITTERING: true,
    ENABLE_BLUR: true,
    temporalResolveMix: {value: 0.9, min: 0, max: 1},
    temporalResolveCorrectionMix: {value: 0.4, min: 0, max: 1},
    maxSamples: {value: 0, min: 0, max: 1},
    resolutionScale: {value: 1, min: 0, max: 1},
    blurMix: {value: 0.2, min: 0, max: 1},
    blurExponent: {value: 10, min: 0, max: 20},
    blurKernelSize: {value: 1, min: 0, max: 10},
    rayStep: {value: 0.5, min: 0, max: 1},
    intensity: {value: 1, min: 0, max: 5},
    maxRoughness: {value: 1, min: 0, max: 1},
    jitter: {value: 0.3, min: 0, max: 5},
    jitterSpread: {value: 0.25, min: 0, max: 1},
    jitterRough: {value: 0.1, min: 0, max: 1},
    roughnessFadeOut: {value: 1, min: 0, max: 1},
    rayFadeOut: {value: 0, min: 0, max: 1},
    MAX_STEPS: {value: 20, min: 0, max: 20},
    NUM_BINARY_SEARCH_STEPS: {value: 6, min: 0, max: 10},
    maxDepthDifference: {value: 10, min: 0, max: 10},
    maxDepth: {value: 1, min: 0, max: 1},
    thickness: {value: 10, min: 0, max: 10},
    ior: {value: 1.45, min: 0, max: 2}
  }
  return (
    <EffectComposer disableNormalPass>
      <SSR {...props} />
      <Bloom luminanceThreshold={0.5} mipmapBlur luminanceSmoothing={0} intensity={1.5}/>
      <LUT lut={data.texture}/>
    </EffectComposer>
  )
}
