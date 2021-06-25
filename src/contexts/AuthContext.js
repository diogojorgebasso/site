import React, { useContext, useState, useEffect } from "react";
import { auth, analytics, database } from "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    analytics.logEvent("singup", { method: "EmailAndPassword" });
    return auth.createUserWithEmailAndPassword(email, password);
  }

  async function login(email, password) {
    analytics.logEvent("login", { method: "EmailAndPassword" });
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    analytics.setUserProperties({ forgotten: "sim" });
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function writeDbSignup() {
    //I need the UID
    console.log(currentUser?.uid);
    database.users.doc(currentUser?.uid).set({
      email: currentUser?.email,
      password: currentUser?.password,
      createdAt: database.getTime(),
      pro: false,
    });
    console.log("anotei");
    analytics.logEvent("signUp", { method: "EmailAndPassword" });
  }

  function logDbLogin() {
    console.log(currentUser.uid);

    //TESTME: add to array
    database.user.doc(currentUser.uid).collection("lastLogin").doc().set({
      ip: "00000",
      city: "Test",
      userAgent: "Mozilla",
      createdAt: "time now",
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    writeDbSignup,
    logDbLogin,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
