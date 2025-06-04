// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDvMLI4QL90kIbjVn_6e02dUIa4K1dt3Ws",
  authDomain: "login-c8afc.firebaseapp.com",
  projectId: "login-c8afc",
  storageBucket: "login-c8afc.firebasestorage.app",
  messagingSenderId: "907378152010",
  appId: "1:907378152010:web:587c0777c4926b0ba0ccb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
import { getFirestore } from "firebase/firestore";
export const db = getFirestore(app);
