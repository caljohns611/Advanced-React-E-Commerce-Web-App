import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwPIoTiOkZ9xln60q-mRlbBWsLrnnal3Q",
  authDomain: "for-resume.firebaseapp.com",
  projectId: "for-resume",
  storageBucket: "for-resume.firebasestorage.app",
  messagingSenderId: "911423775250",
  appId: "1:911423775250:web:a3d14fe09d1700dec5aecb"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);