// Paste your Firebase config here. Data is saved in Firestore when config is correct.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, where, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
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
