import React from "react";
import "./sign-in.sign-up";
import SignIn from "../../components/Sign-in/sign-in";
import SignUp from "../../components/Sign-up/sign-up";

const SignInSignUpPage = () => (
  <div className="sign-page">
    <div className="form-container">
      <SignIn />
      <SignUp />
    </div>
  </div>
);
export default SignInSignUpPage;
