import {MeshTransmissionMaterial, useFBO} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import { easing } from 'maath'

export default function Cursor({children, damping = 0.15, ...props}) {

  const ref = useRef()

  useFrame((state, delta) => {

    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 15])
    easing.damp3(
      ref.current.position,
      [(state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 15],
      damping,
      delta
    )

    // state.gl.setRenderTarget(buffer)
    // state.gl.setClearColor('#d8d7d7')
    // state.gl.render(scene, state.camera)
    // state.gl.setRenderTarget(null)
  })
  return (
    <>
      {/*{createPortal(children, scene)}*/}
      {/*<mesh scale={[viewport.width, viewport.height, 1]}>*/}
      {/*  <planeGeometry/>*/}
      {/*  <meshBasicMaterial map={buffer.texture}/>*/}
      {/*</mesh>*/}
      {/*<mesh scale={0.25} ref={ref} rotation-x={Math.PI / 2} geometry={nodes.Cylinder.geometry} {...props}>*/}
      {/*  <MeshTransmissionMaterial buffer={buffer.texture} ior={1.2} thickness={1.5} anisotropy={0.1}*/}
      {/*                            chromaticAberration={0.04}/>*/}
      {/*</mesh>*/}

      <mesh ref={ref} rotation-x={Math.PI / 2} {...props}>
        <icosahedronGeometry args={[6, 2]} />
        <meshStandardMaterial />
      </mesh>
    </>
  )
}
