// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOIvgqd6yaDQvQRGQsP0psdwUInk-O8K0",
    authDomain: "chat-c2fab.firebaseapp.com",
    projectId: "chat-c2fab",
    storageBucket: "chat-c2fab.appspot.com",
    messagingSenderId: "660352609509",
    appId: "1:660352609509:web:3f597d93a0b1e90074780c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
