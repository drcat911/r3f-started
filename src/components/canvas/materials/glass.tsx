import {MeshTransmissionMaterial} from '@react-three/drei';
import React from 'react';
import {useLoader} from "@react-three/fiber";
import {RGBELoader} from "three-stdlib";

export const Glass = ({color}: { color: string }) => {

  const texture = useLoader(RGBELoader, '/models/aerodynamics_workshop_1k.hdr');

  const config = {
    backside: true,
    backsideThickness: 0.5,
    samples: 16,
    resolution: 2024,
    transmission: 1,
    clearcoat: 2,
    clearcoatRoughness: 1.0,
    thickness: 55,
    chromaticAberration: 5,
    anisotropy: 5,
    roughness: 0,
    distortion: 0.5,
    distortionScale: 0.5,
    temporalDistortion: 0,
    ior: 4.5,
  };

  return (
    <>
      <MeshTransmissionMaterial {...config}/>
    </>
  );
};
