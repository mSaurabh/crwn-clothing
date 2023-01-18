// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFJwCXoSf0_ZC3bAbGD1isG7KzWG_pSNk",
  authDomain: "fin-mall.firebaseapp.com",
  projectId: "fin-mall",
  storageBucket: "fin-mall.appspot.com",
  messagingSenderId: "314852665857",
  appId: "1:314852665857:web:9b3f6db7321da0230b2e00"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

const params = {
  prompt: "select_account"
};

provider.setCustomParameters(params);

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email, uid } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        uid,
        ...additionalInfo
      });
    } catch (error) {
      console.log("Error creating user ", error);
    }

    return userDocRef;
  } else {
    console.log("Welcome back ", userAuth.displayName);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const singInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
