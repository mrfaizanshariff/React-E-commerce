import React from "react";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      displayName: "",
      confirmPassword: "",
      email: "",
      password: "",
    });
    console.log(event);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="displayName"
            value={this.state.displayName}
            required
            handleChange={this.handleChange}
            label="Email"
          ></FormInput>
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
          <FormInput
            name="confirmPassword"
            type="confirmPassword"
            value={this.state.confirmPassword}
            required
            handleChange={this.handleChange}
            label="Password"
          ></FormInput>
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUp;
