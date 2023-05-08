import React from "react";
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

const Dome = props => {

  const texture = useTexture(props.texture);
  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry attach='geometry' args={[500, 60, 40]} />
      <meshBasicMaterial attach='material' map={texture} side={THREE.BackSide}/>
    </mesh>
  );
};

export default Dome;