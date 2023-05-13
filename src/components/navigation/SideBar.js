import useHotspotStore from "../../stateManagerStore/useHotspotStore";
import HotspotList from "../UI/HotspotList";
import './SideBar.css';

const SideBar = () => {
  const aggiungi = useHotspotStore((state) => state.addHotspot);

  const filePicker = (event) => {
    const URL = window.URL || window.webkitURL;
    
    if (event.target.files) {
      const file = event.target.files[0];
      let img = new Image();
      const fileUrl = URL.createObjectURL(file);
      img.src = fileUrl;
        img.onload = () => {
          aggiungi(fileUrl, file.name, img.width, img.height, [0, 0, 0], [0, Math.PI/2, 0]);
        }    
    }
  }

  return(
    <div className="sidebar">
      <div className="sidebar-btn">
        <img className="sidebar-img" src="/img/galleria.png" alt="panorami"/>
        <label>LISTA PANORAMI</label>
      </div>
      <div className="sidebar-btn">
        <img className="sidebar-img" src="/img/hotspotBianco.png" alt="hotspot"/>
        <label htmlFor='hotspotInput'>AGGIUNTI HOTSPOT</label>
        <input type="file" id="hotspotInput" accept="image/png, image/jpeg" onChange={filePicker}/>
      </div>
      <HotspotList />
    </div>
  );
};


export default SideBar;