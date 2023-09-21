import {Canvas} from "@react-three/fiber";
import React, {useEffect} from "react";
import {CameraControls, SoftShadows} from "@react-three/drei";
import {IceBlockModel} from "@/components/canvas/ice-block/Ice_block";

export default function SeeDeep() {

  useEffect(() => {
    console.log('___ok');
  }, [])

  return <>
    <Canvas camera={{position: [0, 0, 30], fov: 35, near: 1, far: 60}} gl={{antialias: false}}>
      <color attach="background" args={['red']}/>
      <fog attach="fog" args={['black', 0, 20]}/>
      <pointLight position={[10, -10, -20]} intensity={10}/>
      <pointLight position={[-10, -10, -20]} intensity={10}/>
      <ambientLight/>
      <group rotation={[0, 0, 1.8]} position={[10, 0, 0]}>
        <IceBlockModel position={[0, 0, 0]} rotation={[1, 1, 0]} scale={10}/>
      </group>
      <SoftShadows samples={3}/>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 2}
                      maxAzimuthAngle={Math.PI / 2}/>
    </Canvas>
  </>
}
