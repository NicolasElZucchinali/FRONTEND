import React from "react";

import CloseButton from "../UI/CloseButton";
import './Map.css';


const Map = props => {

  return (
    <div className="centered">
      <div className="map">
        <div className="map-title">
          <p>MAPPA</p>
          <CloseButton onClick={props.mapClick}/>
        </div>
        <div className="map-alt">
          <img className="map-img" alt="mappa" src="/img/MAPPA.png"/>
        </div>
      </div>
    </div>
  );
};

export default Map;