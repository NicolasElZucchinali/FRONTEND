import React from "react";
import {useTexture} from '@react-three/drei';

const ImageHotspot = props => {
  const texture = useTexture(props.url);

  return (
    <mesh rotation={props.rotation} position={props.position}>
      <planeGeometry attach='geometry' args={[20, 30]}/>
      <meshBasicMaterial attach='material' transparent={true} map={texture} />
    </mesh>
  );
};

export default ImageHotspot;