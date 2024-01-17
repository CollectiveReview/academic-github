// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqG6ztzcxGKSB8Op3E-nhzfl9CgXOrlro",
  authDomain: "yjs-editor.firebaseapp.com",
  databaseURL: "https://yjs-editor-default-rtdb.firebaseio.com",
  projectId: "yjs-editor",
  storageBucket: "yjs-editor.appspot.com",
  messagingSenderId: "459953287631",
  appId: "1:459953287631:web:d988dd69db540bed08a2ba",
  measurementId: "G-Z0P2MKNDR7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);