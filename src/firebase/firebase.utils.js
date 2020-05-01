import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBoql13mQnpmPG9EJrrruw91bV4uJNAuc4",
  authDomain: "crwn-clothing-7e745.firebaseapp.com",
  databaseURL: "https://crwn-clothing-7e745.firebaseio.com",
  projectId: "crwn-clothing-7e745",
  storageBucket: "crwn-clothing-7e745.appspot.com",
  messagingSenderId: "1001890094812",
  appId: "1:1001890094812:web:82667e98f496f900849e19",
  measurementId: "G-ZFBL8DDKK5",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
