// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH2h8khptuXHexN-wr3tw1Dk3f3Tu6tu0",
  authDomain: "the-news-paper.firebaseapp.com",
  projectId: "the-news-paper",
  storageBucket: "the-news-paper.firebasestorage.app",
  messagingSenderId: "589454158972",
  appId: "1:589454158972:web:8cf853a655c034ed466df9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
