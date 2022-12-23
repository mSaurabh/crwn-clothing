import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  auth,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  useEffect(() => {
    async function Hello() {
      const response = await getRedirectResult(auth);
      if (response) {
        createUserDocumentFromAuth(response.user);
      }
    }
    Hello();
  }, []);

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
    await createUserDocumentFromAuth(user);
  };

  /**
   * <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={logGoogleRedirectUser}>
        Sign in with Google Redirect
      </button>
   */
  return (
    <div>
      <h1>Sign In Page</h1>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
