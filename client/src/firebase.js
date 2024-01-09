// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ar-real-estates.firebaseapp.com",
  projectId: "ar-real-estates",
  storageBucket: "ar-real-estates.appspot.com",
  messagingSenderId: "793144229551",
  appId: "1:793144229551:web:91a4a3c6d2e0193d54de5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);