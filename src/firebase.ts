import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdPuM37XWWVTL769YpMOxGWcy7wN9m79M",
  authDomain: "reliable-e9a25.firebaseapp.com",
  projectId: "reliable-e9a25",
  storageBucket: "reliable-e9a25.firebasestorage.app",
  messagingSenderId: "1096410938464",
  appId: "1:1096410938464:web:b4025e5ccb97d053815705",
  measurementId: "G-QW1ZKEG1JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();