import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import Dome from './Dome';
import './Panorama.css';
import useOrbitControl from '../../stateManagerStore/useOrbitControl';
import ImageHotspotList from './ImageHotspotList';


const Panorama = props => {
  const orbitControl = useOrbitControl((state) => state.orbitControl);

  return(
    <Canvas className='panorama' >
      <PerspectiveCamera makeDefault/>
      <OrbitControls makeDefault target={[-45, 0, 0]} enabled={orbitControl} enableDamping dampingFactor={0.2} />
      <Suspense fallback={null}> 
        <Dome className='dome' texture={props.texture}/>
        <ImageHotspotList />
      </Suspense>
    </Canvas>
  );
};

export default Panorama;