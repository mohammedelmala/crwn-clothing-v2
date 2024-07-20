import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.style.scss";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  // ////////////////////////////////////////////////
  // logGoogleUser
  // ///////////////////////////////////////////////
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  // /////////////////////////////////
  // handleSubmit
  // ////////////////////////////////
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        case "auth/invalid-credential":
          alert("Invalid user name or Password");
          break;
        default:
          alert(error);
      }
    }
  };
  // ///////////////////////////////
  // return component
  // ///////////////////////////////
  return (
    <div className="sign-up-container">
      <h2>Alredy have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit} autoComplete="false">
        <FormInput
          label="Email"
          type="email"
          id="email1"
          value={email}
          required
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="Password"
          type="password"
          id="password1"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
