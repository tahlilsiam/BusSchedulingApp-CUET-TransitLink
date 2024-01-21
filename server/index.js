
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqT5awsT24uLpWh5Yz1F4ha3tdNFBHEWc",
  authDomain: "cuet-transitlink.firebaseapp.com",
  projectId: "cuet-transitlink",
  storageBucket: "cuet-transitlink.appspot.com",
  messagingSenderId: "91833728978",
  appId: "1:91833728978:web:50d0e46af893114457d20b",
  measurementId: "G-QL5XZSM4K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const function= require("firebase-functions");
