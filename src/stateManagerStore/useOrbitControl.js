import { create } from "zustand";

//state manager per attivare e disattivare gli orbit control da qualsiasi schermata

const useOrbitControl = create((set) => ({
  orbitControl : true,
  setOrbitControl : (value) => set({ orbitControl: value }),
}));


export default useOrbitControl;