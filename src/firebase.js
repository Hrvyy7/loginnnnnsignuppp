// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB5_kDHR-XkO26NI1mNg4wZ01hP4IjdA4E",
    authDomain: "login-page-8630d.firebaseapp.com",
    projectId: "login-page-8630d",
    storageBucket: "login-page-8630d.appspot.com",
    messagingSenderId: "525423880099",
    appId: "1:525423880099:web:7f741afd19dc15c292dc16",
    measurementId: "G-2RSV5XQ6GQ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
