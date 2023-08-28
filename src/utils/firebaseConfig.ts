import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOXaAraX92Bw8IRhgDp-W2sLetc0qNPRo",
    authDomain: "pokemon-web-app-4d47d.firebaseapp.com",
    projectId: "pokemon-web-app-4d47d",
    storageBucket: "pokemon-web-app-4d47d.appspot.com",
    messagingSenderId: "851843962679",
    appId: "1:851843962679:web:c0793bf99ee4a5d8ee6cb2",
    measurementId: "G-3SBGCMHWE2"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
