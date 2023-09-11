import {Canvas} from "@react-three/fiber";
import {Center, Environment, Grid, OrbitControls, Stage} from "@react-three/drei";
import React from "react";
import {ErgoScence} from "@/components/canvas/ergo/Ego";
import {EffectComposer, Bloom} from '@react-three/postprocessing'

export default function ErgoModule() {


  return (
    <Canvas gl={{logarithmicDepthBuffer: true}} shadows camera={{position: [0, 0, 10], fov: 25}}>
      <fog attach="fog" args={['black', 15, 21.5]}/>
      <Stage intensity={0.5} environment="city" shadows={{type: 'accumulative', bias: -0.001}} adjustCamera={false}>
        <ErgoScence scale={4} position={[0, 0, 0]}/>
      </Stage>
      <Grid renderOrder={-1} position={[0, 0, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3}
            sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30}/>
      <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} makeDefault minPolarAngle={Math.PI / 2}
                     maxPolarAngle={Math.PI / 2}/>
      {/*<EffectComposer disableNormalPass>*/}
      {/*  <Bloom luminanceThreshold={1} mipmapBlur/>*/}
      {/*</EffectComposer>*/}
      <Environment background preset="sunset" blur={0.8}/>
    </Canvas>
  )
}
