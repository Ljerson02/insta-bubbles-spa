import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { FirebaseAuth, FirebaseDB, FirebaseStorage } from "./firebase";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const postBubble = async (bubble) => {
  try {
    const bubblesCollection = collection(FirebaseDB, 'bubbles');
    const newBubbleDoc = await addDoc(bubblesCollection, bubble);
    return { success: true, bubble: { id: newBubbleDoc.id, ...bubble } };
  } catch (error) {
    return { success: false, error };
  }
};

const getAllBubbles = async () => {
  try {
    const bubblesCollection = collection(FirebaseDB, 'bubbles');
    const querySnapshot = await getDocs(bubblesCollection);
    const bubbles = [];
    querySnapshot.forEach((doc) => {
      bubbles.push({ id: doc.id, ...doc.data() });
    });
    return { success: true, bubbles };
  } catch (error) {
    return { success: false, error };
  }
};

const uploadImage = async (image, storagePath) => {
  try {
    const imageType = image.type.split('/')[1];
    const storageRef = ref(FirebaseStorage, `${storagePath}${v4()}.${imageType}`);
    const snapshot = await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    return { success: true, url };
  } catch (error) {
    return { success: false, error };
  }
};

const doLogout = async () => {
  await FirebaseAuth.signOut();
}; 

export { postBubble, getAllBubbles, uploadImage, doLogout };