import { create } from 'zustand';

//state manager per tenere traccia del login dello user con relativi dati. permette login e logout da qualsiasi schermata

const useUserStore = create((set) => ({
  isLoggedIn: false,
  userID: null,
  email: null,
  name:null,
  profilePicture: null,
  login : (userID, name, email, profilePicture) => set({ isLoggedIn: true, userID: userID, name:name, email: email, profilePicture: profilePicture}),
  logout : () => set({ isLoggedIn: false, userID: null, name:null, email: null, profilePicture: null}),
}));

export default useUserStore;