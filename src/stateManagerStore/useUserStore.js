import { create } from 'zustand';

//state manager per tenere traccia del login dello user con relativi dati. permette login e logout da qualsiasi schermata

const useUserStore = create((set) => ({
  isLoggedIn: false,
  userID: null,
  email: null,
  profilePicture: null,
  login : (userID, email, profilePicture) => set({ isLoggedIn: true, userID: userID, email: email, profilePicture: profilePicture}),
  logout : () => set({ isLoggedIn: false, userID: null, email: null, profilePicture: null}),
}));

export default useUserStore;