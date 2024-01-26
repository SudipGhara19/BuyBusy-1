// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4oihpHL--eYUmzFCyIe-N9a8iQJIaYVg",
  authDomain: "buybusy-1-d4dd2.firebaseapp.com",
  projectId: "buybusy-1-d4dd2",
  storageBucket: "buybusy-1-d4dd2.appspot.com",
  messagingSenderId: "958041378148",
  appId: "1:958041378148:web:3df9f2a38698eab1e4be71"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
