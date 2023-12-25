// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWxQTXUUqXI9TXSlTABlglPOaGg-ZTLNQ",
    authDomain: "emoji-describe.firebaseapp.com",
    projectId: "emoji-describe",
    storageBucket: "emoji-describe.appspot.com",
    messagingSenderId: "399943512636",
    appId: "1:399943512636:web:92e33a481d21d236ba4939",
    measurementId: "G-B33B32GL2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);