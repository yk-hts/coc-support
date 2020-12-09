import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const history = useHistory();
  const [currentUser, setCurrentUser] = useState(null);

  const signup = async (email, password, history) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      // history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signin = async (email, password, history) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const signout = async (history) => {
    await auth
      .signOut()
      .then(() => {
        console.log("sign out");
        history.push("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const signinwithgoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function () {
        console.log("SignIn Success");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, signout, signin, signinwithgoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};
