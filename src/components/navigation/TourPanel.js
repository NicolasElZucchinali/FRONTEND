import React from "react";


import './TourPanel.css';
import SideBar from "./SideBar";
import NewPanoramaButton from "../UI/NewPanoramaButton";
import Panorama from "../UI/Panorama";
import usePersonalTour from "../../stateManagerStore/usePersonalTour";

const TourPanel = () => {
  const activePanorama = usePersonalTour((state) => state.activePanorama);



  return (
    <div className="panel">
      {!activePanorama && <NewPanoramaButton/>}
      {activePanorama && <Panorama texture={activePanorama}/>}
      <SideBar />
    </div>
  );
};

export default TourPanel;