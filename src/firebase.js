import firebase from "firebase/app";
import "firebase/storage";
import "firebase/analytics";
import "firebase/firestore";
import "firebase/remote-config";
import "firebase/auth";
import "firebase/performance";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB4mymKS6zyq7ZjG0xdgbl5db6l0rGw0pI",
  authDomain: "sitediogo-8d874.firebaseapp.com",
  projectId: "sitediogo-8d874",
  storageBucket: "sitediogo-8d874.appspot.com",
  messagingSenderId: "616746555813",
  appId: "1:616746555813:web:430804dbb5d3beea91304c",
  measurementId: "G-0H04GKWVX7",
});
// Initialize Firebase
export const analytics = firebase.analytics(); //Done!

export const auth = app.auth();

firebase.performance(); //Done!

export const remoteConfig = firebase.remoteConfig();

const firestore = app.firestore();

export const database = {
  users: firestore.collection("users"),
  blog: firestore.collection("blog"),
  getTime: firebase.firestore.FieldValue.serverTimestamp,
};

export default app;
