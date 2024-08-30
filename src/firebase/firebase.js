import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE__FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE__FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE__FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE__FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE__FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE__FIREBASE_APP_ID,
};

export const FireBaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FireBaseApp);
export const FirebaseDB = getFirestore(FireBaseApp);
export const FirebaseStorage = getStorage(FireBaseApp);
