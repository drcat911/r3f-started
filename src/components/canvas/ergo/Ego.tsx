import React, {useRef} from "react";
import {useGLTF, useAnimations} from "@react-three/drei";

export function ErgoScence(props) {
  const group = useRef();
  const {nodes, materials, animations} = useGLTF("/models/ego-transformed.glb");
  const {actions} = useAnimations(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="SceneOpt">
        <group name="Armature002">
          <primitive
            object={nodes.ROOT}/>
        </group>
        <skinnedMesh
          castShadow
          receiveShadow
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials["Fabric_001.002"]}
          skeleton={nodes.Plane002.skeleton}
        >
          <meshStandardMaterial map={materials["Fabric_001.002"].map} map-flipY={false} skinning/>
        </skinnedMesh>
      </group>
    </group>
  );
}

useGLTF.preload("/models/ego-transformed.glb");
