import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDveLdtFIYdPbbSltuUNgC9ED2dGIfu_o8",
  authDomain: "diogobasso-site.firebaseapp.com",
  projectId: "diogobasso-site",
  storageBucket: "diogobasso-site.appspot.com",
  messagingSenderId: "990521298107",
  appId: "1:990521298107:web:1b50af11599356ce3d2d9e",
  measurementId: "G-5R4JHYNCCB",
});
// Initialize Firebase
export const analytics = firebase.analytics();
export const auth = app.auth();
export default app;

export const remoteConfig = firebase.remoteConfig();
