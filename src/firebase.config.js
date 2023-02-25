// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcfiQSRsK6-nMsdSg1ObIG2M9rjwQOL9M",
  authDomain: "ril-22307.firebaseapp.com",
  projectId: "ril-22307",
  storageBucket: "ril-22307.appspot.com",
  messagingSenderId: "142580537184",
  appId: "1:142580537184:web:27a0db20dca6ee809e3005",
  measurementId: "G-1SK9MPXH2Z",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
