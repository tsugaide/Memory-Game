// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVmAc2HT0wFRhNXk2emD5fgTYGJauWtwc",
  authDomain: "memorygame-860da.firebaseapp.com",
  projectId: "memorygame-860da",
  storageBucket: "memorygame-860da.firebasestorage.app",
  messagingSenderId: "174250556511",
  appId: "1:174250556511:web:d7b5792f4b65f433c26fea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
