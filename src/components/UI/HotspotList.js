import React from "react";

import useHotspotStore from '../../stateManagerStore/useHotspotStore';

const HotspotList = () => {
  const hotspots = useHotspotStore((state) => state.hotspots);
  const removeHotspot = useHotspotStore((state) => state.removeHotspot);

  return (
    <div>
      {hotspots && hotspots.map(hotspot => {
            return(
              <div key={hotspot.url} className="sidebar-btn sidebar-file">
                <img key={hotspot.url} className="file" alt="not found" src={hotspot.url} />
                <label>{hotspot.name}</label>
                <label onClick={() => removeHotspot(hotspot.url)}>Remove</label>
              </div>
            )
          }
        )
      }
    </div>
  );
}


export default HotspotList;