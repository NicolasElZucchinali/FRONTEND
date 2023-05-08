import { create } from "zustand";

//state manager per settare il panorama di riferimento

const usePersonalTour = create((set) => ({
  activePanorama : null,
  setActivePanorama : (value) => set({ activePanorama: value }),
}));

export default usePersonalTour;