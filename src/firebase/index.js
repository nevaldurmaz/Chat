import { initializeApp } from "firebase/app";

//?authentication import
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZM1WEZK3MVbgUFVkuXfUW53O1_5Q9-i4",
  authDomain: "chat-ba700.firebaseapp.com",
  projectId: "chat-ba700",
  storageBucket: "chat-ba700.firebasestorage.app",
  messagingSenderId: "928317671849",
  appId: "1:928317671849:web:f4d28a5350d950b5641cb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! authentication referansını front-end e alma(kurulum)
export const auth = getAuth(app);

//! google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

//! veritabanının referansını al(kurulum)

export const db = getFirestore(app);
