// Paste your Firebase config here
const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
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
