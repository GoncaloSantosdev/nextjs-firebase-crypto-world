import { getApp, getApps ,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehTaqb9lbpQm4XXIKbiIX4ImOFh21SBg",
  authDomain: "crypto-world-ba8f7.firebaseapp.com",
  projectId: "crypto-world-ba8f7",
  storageBucket: "crypto-world-ba8f7.appspot.com",
  messagingSenderId: "889556057287",
  appId: "1:889556057287:web:b15c88a01f29a37c7792e2"
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };