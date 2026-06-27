// Paste your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyBmhXcEdUnYAwrOJ3bO1sNwjWL23k9xkTY",
  authDomain: "madha-attendance-pro.firebaseapp.com",
  projectId: "madha-attendance-pro",
  storageBucket: "madha-attendance-pro.firebasestorage.app",
  messagingSenderId: "445264069658",
  appId: "1:445264069658:web:149181ea259ed6a2703da3"
};
let db=null, storage=null, firebaseReady=false;
try{
  if(firebaseConfig.apiKey !== "PASTE_API_KEY"){
    firebase.initializeApp(firebaseConfig);
    db=firebase.firestore();
    storage=firebase.storage();
    firebaseReady=true;
  }
}catch(e){console.warn('Firebase not connected, local demo mode enabled',e)}
