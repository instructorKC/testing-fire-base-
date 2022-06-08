// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHX8rJtQ82YQpYF-SrLwE9VKr90uGN5eg",
  authDomain: "test-learn-86bc6.firebaseapp.com",
  projectId: "test-learn-86bc6",
  storageBucket: "test-learn-86bc6.appspot.com",
  messagingSenderId: "449802451742",
  appId: "1:449802451742:web:27c97e56b3475ad9ffa70f",
  measurementId: "G-6WP604K1M7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
