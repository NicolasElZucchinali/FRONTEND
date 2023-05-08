/*
import React, { useRef } from "react";
import { extend, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls});

const ControlsOrbit = props => {
  const {camera, gl} = useThree();
  const ref = useRef();
  useFrame(() =>{ 
    ref.current.update();
    //console.log(camera.position); POSIZIONE INIZIALE
  });
  return (
    <orbitControls ref={ref} target={[-45, 0, 0]} {...props} args={[camera, gl.domElement]} />
  );
};

export default ControlsOrbit; 
*/