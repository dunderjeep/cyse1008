// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,    
  } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAivoYo1KhpGcnSU90ORRGesM8h9SXrioU",
  authDomain: "cyse1008.firebaseapp.com",
  projectId: "cyse1008",
  storageBucket: "cyse1008.appspot.com",
  messagingSenderId: "1068406999657",
  appId: "1:1068406999657:web:c4f903e02d1690ddb1f0f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      display: "popup",
    });
    return signInWithPopup(auth, provider);
  }

