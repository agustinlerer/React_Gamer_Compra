
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyATu86xlLb9nUdGs7c3TbiQi8og-JEOPFU",
  authDomain: "pokecompra-c8cd6.firebaseapp.com",
  projectId: "pokecompra-c8cd6",
  storageBucket: "pokecompra-c8cd6.appspot.com",
  messagingSenderId: "524801302794",
  appId: "1:524801302794:web:6bcac96b36b7b4631b1af3"
};


const app = initializeApp(firebaseConfig);
export const initFirebase = () => app
