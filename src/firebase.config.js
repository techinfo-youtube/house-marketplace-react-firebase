// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
 // addd your key and configuration details
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
