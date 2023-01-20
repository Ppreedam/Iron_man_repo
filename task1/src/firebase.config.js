// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhIDeQ3kKEqRyGavOU_dX4iaGOFNsi6zI",
  authDomain: "content-7974f.firebaseapp.com",
  projectId: "content-7974f",
  storageBucket: "content-7974f.appspot.com",
  messagingSenderId: "1068968224892",
  appId: "1:1068968224892:web:b9c052245a183e66d601f9",
  measurementId: "G-562MY22S6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);