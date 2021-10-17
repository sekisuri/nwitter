// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyNm47P9MnVWo4NehsTeW-bSSsMHFNBF8",
    authDomain: "sekisuri-nwitter.firebaseapp.com",
    projectId: "sekisuri-nwitter",
    storageBucket: "sekisuri-nwitter.appspot.com",
    messagingSenderId: "903952669295",
    appId: "1:903952669295:web:321036ee33ad60da458b9a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();


