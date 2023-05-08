import React, {useState} from "react";

import Panorama from "../components/UI/Panorama";
import Access from "../components/forms/Access";
import FootBar from "../components/navigation/FootBar";
import Map from "../components/navigation/Map";
import TourPanel from "../components/navigation/TourPanel";
import useActivePanorama from "../stateManagerStore/useActivePanorama";


const Home = () => {

  const activePanorama = useActivePanorama((state) => state.activePanorama);
  const [access, setAccess] = useState(false);
  const [map, setMap] = useState(false);
  const [tour, setTour] = useState(false);
  

  const mapClick = () => {
    if(map){
      setMap(false);
    } else {
      setMap(true);
    }
  };

  const labClick = () => {

  };

  const libraryClick = () => {

  };

  const accessClick = () => {
    if(access){
      setAccess(false);
    } else {
      setAccess(true);
    }
  };

  const tourClick = () => {
    if(tour){
      setTour(false);
    } else {
      setTour(true);
    }
  };

 


  return ( 
    <React.Fragment>
      <Panorama texture={activePanorama}></Panorama>
      {access && <Access></Access>}
      {map && <Map onClick={mapClick}></Map>}
      {tour && <TourPanel></TourPanel>}
      <FootBar  mapHandler={mapClick} labHandler={labClick}  libraryHandler={libraryClick} accessHandler={accessClick} tourHandler={tourClick}></FootBar>
    </React.Fragment>
  );

};

export default Home;