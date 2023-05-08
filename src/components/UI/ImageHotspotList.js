import React, { Suspense } from "react";
import {PivotControls } from '@react-three/drei';

import useOrbitControl from "../../stateManagerStore/useOrbitControl";
import useHotspotStore from "../../stateManagerStore/useHotspotStore";
import ImageHotspot from "../hotspot/ImageHotspot";

const ImageHotspotList = () => {
  const hotspots = useHotspotStore((state) => state.hotspots);
  const setOrbitControl = useOrbitControl((state) => state.setOrbitControl);

  return(
    <Suspense>
      {hotspots &&  hotspots.map(hotspot => {
        if(hotspot.url){
          return (
            <PivotControls key={hotspot.url} scale={20} enabled={false} onDragStart={() => {setOrbitControl(false)}} onDragEnd={() => {setOrbitControl(true);}} onDrag={(event)=> console.log(event)}>
              <ImageHotspot key={hotspot.url} url={hotspot.url} position={hotspot.position} rotation={hotspot.rotation}/> 
            </PivotControls>
          );
        }  
          return console.log('no hotspots found');  
        })
      }
      {
        hotspots &&  console.log(hotspots)
      }
    </Suspense>
  );
}

export default ImageHotspotList;