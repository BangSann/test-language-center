
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAID7qUXE6cH-LZSLDDX-Ou9uhCctfuu30",
  authDomain: "test-language-center.firebaseapp.com",
  projectId: "test-language-center",
  storageBucket: "test-language-center.firebasestorage.app",
  messagingSenderId: "263734461127",
  appId: "1:263734461127:web:742e3dc69a5721df88f4e2",
  measurementId: "G-D4GK4R2LX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export const store = getFirestore(app);