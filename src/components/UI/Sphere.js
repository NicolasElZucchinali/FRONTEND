import React, { useRef, useState } from 'react';
import { useTexture } from '@react-three/drei';

const Sphere = props => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const texture = useTexture('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/2294472375_24a3b8ef46_o.jpg');
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  //useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={(clicked || hovered) ? 1 : 1}
      onClick={() => setClick(!clicked)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>
      <sphereGeometry args={[45, 60, 40]} scale={[-1, 1, 1]} />
      <meshStandardMaterial map={texture}/>
    </mesh>
  )
}

export default Sphere;