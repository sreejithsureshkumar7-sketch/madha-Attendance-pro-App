// Paste your Firebase config here. Data is saved in Firestore when config is correct.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBmhXcEdUnYAwrOJ3bO1sNwjWL23k9xkTY",
  authDomain: "madha-attendance-pro.firebaseapp.com",
  projectId: "madha-attendance-pro",
  storageBucket: "madha-attendance-pro.firebasestorage.app",
  messagingSenderId: "445264069658",
  appId: "1:445264069658:web:149181ea259ed6a2703da3"
};

let db = null;
let firebaseReady = false;
try {
  if (!firebaseConfig.apiKey.includes("PASTE")) {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    firebaseReady = true;
  }
} catch (err) { console.warn("Firebase not ready, using localStorage demo", err); }
window.firebaseTools = { db, firebaseReady, collection, addDoc, getDocs, query, where, doc, setDoc };
