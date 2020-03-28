import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBPta60MxqXYLAvW-tFZ37UxG5jB4CNeXc",
  authDomain: "crwn-db-e07ce.firebaseapp.com",
  databaseURL: "https://crwn-db-e07ce.firebaseio.com",
  projectId: "crwn-db-e07ce",
  storageBucket: "crwn-db-e07ce.appspot.com",
  messagingSenderId: "511364995450",
  appId: "1:511364995450:web:870404cf93c520b8c81ec3",
  measurementId: "G-SZHQ54TM6S"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log("DISPLAY name", userAuth);
  console.log("additionalData", additionalData);

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        displayName,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error);
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
