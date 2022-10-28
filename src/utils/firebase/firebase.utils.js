// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
