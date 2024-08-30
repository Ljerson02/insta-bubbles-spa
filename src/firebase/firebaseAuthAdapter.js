import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { FirebaseAuth } from './firebase';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const { user } = await signInWithPopup(FirebaseAuth, googleProvider);
    const { uid, email, displayName, photoURL } = user;
    if(!user) throw new Error('User not found');
    return { success: true, user: { uid, email, displayName, photoURL } };
  } catch (error) {
    return { success: false, error };
  }
};

export const singUpWithCredentials = async (userName, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = user;
    await updateProfile(FirebaseAuth.currentUser, { displayName: userName });
    if(!user) throw new Error('User not found');
    return { success: true, uid };
  } catch (error) {
    return { success: false, error };
  }
};

export const loginWithCredentials = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid, displayName, photoURL } = user;
    if(!user) throw new Error('User not found');
    return { success: true, user: { uid, email, displayName, photoURL } };
  } catch (error) {
    return { success: false, error };
  }
};
