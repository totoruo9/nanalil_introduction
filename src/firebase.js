// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3xmeKcbTFR29HVMsbvi9SLIEKKCbJDvU",
  authDomain: "portfolio-nanalil.firebaseapp.com",
  projectId: "portfolio-nanalil",
  storageBucket: "portfolio-nanalil.appspot.com",
  messagingSenderId: "574872265437",
  appId: "1:574872265437:web:a8e5e54b4a2252d0d8b134"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const Storage = getStorage(FirebaseApp, 'gs://portfolio-nanalil.appspot.com');