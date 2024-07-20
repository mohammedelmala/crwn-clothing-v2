import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.style.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      const userDocRef = await createUserDocumentFromAuth(user, {
        displayName,
      });
      setFormFields({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      console.log(userDocRef);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email alredy in used");
        return;
      }
      console.log(`user created encountered an error ${error}`);
    }
  };
  // ///////////////////////////////
  // return component
  // ///////////////////////////////
  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} autoComplete="false">
        <FormInput
          label="DisplayName"
          type="text"
          id="displayName"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />
        <FormInput
          label="Email"
          type="email"
          id="email"
          value={email}
          required
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <FormInput
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
