import { create } from "zustand";

//state manager per settare il panorama di riferimento

const useActivePanorama = create((set) => ({
  activePanorama : '/texture/esterno.jpg',
  setActivePanorama : (value) => set({ activePanorama: value }),
}));


export default useActivePanorama;