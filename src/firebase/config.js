import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6CnTIewZbL0Ro_n5B8enYpq9c74bvQFY",
  authDomain: "coderproyectofinal-reactjs.firebaseapp.com",
  projectId: "coderproyectofinal-reactjs",
  storageBucket: "coderproyectofinal-reactjs.firebasestorage.app",
  messagingSenderId: "789923469649",
  appId: "1:789923469649:web:51ceed3e030e7cfbac5b70"
};

// 
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);