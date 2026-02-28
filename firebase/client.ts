// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV530QKZNYdBrJFDuPtoKwg2pOCgsYviM",
  authDomain: "prepwise-28f2e.firebaseapp.com",
  projectId: "prepwise-28f2e",
  storageBucket: "prepwise-28f2e.firebasestorage.app",
  messagingSenderId: "599211259398",
  appId: "1:599211259398:web:e5edd952af612d0570f587",
  measurementId: "G-VFZ5RLL7CR"
};


// Initialize Firebase
const app =  !getApps.length ?   initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)