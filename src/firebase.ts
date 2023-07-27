// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIpD_OQTykmsufMS4N0XAkpzgXjdHiw5M",
  authDomain: "fir-test-1-394100.firebaseapp.com",
  projectId: "firebase-test-1-394100",
  storageBucket: "firebase-test-1-394100.appspot.com",
  messagingSenderId: "438482493030",
  appId: "1:438482493030:web:7baa55bc12f4547ae457a7",
  measurementId: "G-0JP2S9P0EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);