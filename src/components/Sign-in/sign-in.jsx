import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
    console.log(event);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
            label="Email"
          ></FormInput>

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
            label="Password"
          ></FormInput>
          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignIn;
