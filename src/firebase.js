import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWMgk8LDUidgzlxPXoSJapUn66400m_EQ",
  authDomain: "react-chat-app-79050.firebaseapp.com",
  projectId: "react-chat-app-79050",
  storageBucket: "react-chat-app-79050.appspot.com",
  messagingSenderId: "1081570962660",
  appId: "1:1081570962660:web:02f97aa68d24651dfdd0f1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()