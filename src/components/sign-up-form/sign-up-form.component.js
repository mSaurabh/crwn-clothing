import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({ formFields });
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (err) {
      if (err.message.includes("email-already-in-use")) {
        alert("User already exists!");
      } else {
        console.log("user creation encountered an error ", err.message);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up with your email & password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          onChange={handleChange}
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          onChange={handleChange}
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
