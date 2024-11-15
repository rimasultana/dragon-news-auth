// Import the functions you need from the SDKs you need
import {initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBzcrGQgDhgqquedRnRmEmB7YZdVBr9yc",
  authDomain: "dragon-news-2d749.firebaseapp.com",
  projectId: "dragon-news-2d749",
  storageBucket: "dragon-news-2d749.firebasestorage.app",
  messagingSenderId: "173324922824",
  appId: "1:173324922824:web:d787d58b937739a4229afd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;