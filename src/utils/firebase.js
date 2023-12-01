import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv6wVY4Azeams5q9veNWguyPFTRa1lbGM",
  authDomain: "osrshelp-b4456.firebaseapp.com",
  databaseURL:
    "https://osrshelp-b4456-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "osrshelp-b4456",
  storageBucket: "osrshelp-b4456.appspot.com",
  messagingSenderId: "84326070431",
  appId: "1:84326070431:web:6d4c76db30ba84094d8aaa",
  databaseURL:
    "https://osrshelp-b4456-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
