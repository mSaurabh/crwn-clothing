import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    async function Hello() {
      const response = await getRedirectResult(auth);
      if (response) {
        createUserDocumentFromAuth(response.user);
      }
    }
    Hello();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
    await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Component</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
