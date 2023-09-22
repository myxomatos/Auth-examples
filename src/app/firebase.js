import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyAnUgxnqzIotTfoJyEK_Wn11tjgOx7ZkPM",
  authDomain: "jstest-d4c9c.firebaseapp.com",
  projectId: "jstest-d4c9c",
  storageBucket: "jstest-d4c9c.appspot.com",
  messagingSenderId: "415636492281",
  appId: "1:415636492281:web:796813f30ab78495e8f728"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)