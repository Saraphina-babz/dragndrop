// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
  apiKey: "AIzaSyC76xktmilFzCfZ7z-XwS3idYSLucT4eoA",
  authDomain: "login-auth-896fe.firebaseapp.com",
  projectId: "login-auth-896fe",
  storageBucket: "login-auth-896fe.appspot.com",
  messagingSenderId: "1035113597633",
  appId: "1:1035113597633:web:228895f8c191eaf6206240",
  measurementId: "G-YCMTG3YDNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//initialize firebase authentication and get a reference to the service
export const auth = getAuth(app);



