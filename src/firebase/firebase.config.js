// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8rWwOrd-rorlkJLuSppKceu1np-ePtys",
  authDomain: "movflicks-3e6db.firebaseapp.com",
  projectId: "movflicks-3e6db",
  storageBucket: "movflicks-3e6db.firebasestorage.app",
  messagingSenderId: "304335742660",
  appId: "1:304335742660:web:7bde8202f2cc5c165b8b91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);