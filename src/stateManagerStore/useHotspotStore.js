import { create } from 'zustand';

//state manager per conservare tutti gli hotspot del panorama di riferimento, con annesse posizioni e rotazioni

const useHotspotStore = create((set) => ({
  hotspots : [],
  addHotspot: (url, name, width, height, [x, y, z], [a, b, c]) => set((state) => ({
    hotspots: [...state.hotspots, {url: url, name: name, width: width, height: height, position :[x, y, z], rotation:[a, b, c]}]
  })),
  removeHotspot: (url) => set((state) => ({
    hotspots: state.hotspots.filter((hotspot) => hotspot.url !== url) 
  })),
  moveHotspot: (url, [x, y, z], [a, b, c], key) => set((state) => ({
    hotspots: state.hotspots.map( hotspot => {
      if(hotspot.url === url){
        return {
          ...hotspot,
          position: [x ,y, z],
          rotation: [a, b, c],
        };
      }
      return hotspot;
    }),
  })),
}));


export default useHotspotStore;