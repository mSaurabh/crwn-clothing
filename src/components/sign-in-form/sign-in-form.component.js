import { useState } from "react";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormInput } from "../form-input/form-input.component";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signOutUser,
  singInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: ""
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [user, setUser] = useState();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ formFields });

    try {
      console.log(user);
      if (!user) {
        console.log("Logging IN user");
        const response = await singInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log(response);
        setUser(response);
      } else {
        console.log("Logging out user");
        await signOutUser();
        setUser(null);
      }
      alert(`User Successfully Signed ${user ? "out" : "in"}.`);
    } catch (err) {
      console.log({ err });
      switch (err.code) {
        case "auth/user-not-found":
        case "auth/wrong-password":
          alert("Invalid username and or password");
          break;
        case "auth/too-many-requests":
          alert("Account has been fronzen for too many failed login attempts");
          break;
        default:
          console.log({ err });
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email & password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">{user ? "Sign Out" : "Sign In"}</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.GOOGLE}
          >
            {"Google Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
