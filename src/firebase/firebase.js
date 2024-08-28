import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: import.meta.env.VITE__FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE__FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE__FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE__FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE__FIREBASE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE__FIREBASE_APP_ID,
  apiKey: "AIzaSyDJXccT1aZPHX9zJNsxYfyb8yKUqzBAevE",
  authDomain: "instabubbles-8ac64.firebaseapp.com",
  projectId: "instabubbles-8ac64",
  storageBucket: "instabubbles-8ac64.appspot.com",
  messagingSenderId: "710623429310",
  appId: "1:710623429310:web:988fe5834d8785210c94ef"
};

export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FireBaseApp);
