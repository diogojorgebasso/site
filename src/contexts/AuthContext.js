import React, { useContext, useState, useEffect } from "react";
import { auth, analytics, database } from "../firebase";
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password, name) {
    const user = auth.createUserWithEmailAndPassword(email, password);

    const createLogDB = async (value) => {
      //criando o usuário no database
      await database.users.doc(value.user.uid).set({
        email: value.user.email,
        password: value.user.password,
        displayName: name,
        createdAt: database.getTime(),
        pro: false,
      });
      analytics.logEvent("signUp", { method: "EmailAndPassword" });
    };
    createLogDB();
    return user;
  }

  function login(email, password) {
    analytics.logEvent("login", { method: "EmailAndPassword" });
    return auth
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        //TESTME: add to array
        database.user.doc(value.user.uid).collection("lastLogin").doc().set({
          ip: "00000",
          city: "Test",
          userAgent: "Mozilla",
          createdAt: "time now",
        });
      })
      .catch((err) => console.error(err));
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
