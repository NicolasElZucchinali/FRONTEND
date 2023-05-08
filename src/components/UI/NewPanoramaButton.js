import React from "react";

import './NewPanoramaButton.css';
import usePersonalTour from "../../stateManagerStore/usePersonalTour";

const NewPanoramaButton = () => {

  const setActivePanorama = usePersonalTour((state) => state.setActivePanorama)

  const filePicker = (event) => {
    const URL = window.URL || window.webkitURL;
    
    if (event.target.files) {
      const file = event.target.files[0];
      console.log(file);
      let img = new Image();
      const fileUrl = URL.createObjectURL(file);
      console.log(fileUrl);
      setActivePanorama(fileUrl);
      img.src = fileUrl;
        img.onload = () => {
          //addHotspot(fileUrl, file.name, img.width, img.height, [0, 0, 0], [0, Math.PI/2, 0]);
        }    
    }
  }

  return (
    <label className="new-panorama" htmlFor="panoramaInput">Nuovo Panorama
      <img className="nuovo" src="./img/nuovo.png" alt='nuovo'/>
      <input type="file" hidden id="panoramaInput"  accept="image/png, image/jpeg" onChange={filePicker}/>
    </label>
  );
};


export default NewPanoramaButton;