import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbi8NjkTtRu1Wy2fd9DwFSoT7Nm2hLS5I",
  authDomain: "pokedex-90e98.firebaseapp.com",
  projectId: "pokedex-90e98",
  storageBucket: "pokedex-90e98.appspot.com",
  messagingSenderId: "571250273146",
  appId: "1:571250273146:web:678bcf906603f2d32c44c3",
  measurementId: "G-P5XZX9V15P",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
