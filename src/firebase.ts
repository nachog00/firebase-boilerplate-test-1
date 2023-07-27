// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics'; // ? not needed for now
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCIpD_OQTykmsufMS4N0XAkpzgXjdHiw5M',
  appId: '1:438482493030:web:7baa55bc12f4547ae457a7',
  authDomain: 'fir-test-1-394100.firebaseapp.com',
  databaseURL: 'database.firebaseio.com',
  measurementId: 'G-0JP2S9P0EM',
  messagingSenderId: '438482493030',
  projectId: 'firebase-test-1-394100',
  storageBucket: 'firebase-test-1-394100.appspot.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app); // ? not needed for now

export const db = getFirestore(app);
