import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
const Header = ({ userState }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        {" "}
        SHOP
      </Link>
      <Link className="option" to="/contact">
        {" "}
        CONTACT
      </Link>
      {userState ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/sign">
          {" "}
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);
export default Header;
