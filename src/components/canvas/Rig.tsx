import {useFrame} from "@react-three/fiber";

export default function Rig() {

  useFrame((state) => {
    state.camera.position.lerp({x: state.pointer.x, y: 3 + state.pointer.y, z: state.camera.position.z}, 0.1)
    state.camera.lookAt(0, 0, 0)
  })
}
