import React from "react";
import "./styles.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "./../../firebase/utils";
import Logo from "./../../assets/logo.png";

const Header = (props) => {
  const { currentUser } = props;
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="fotoShop Logo" />
          </Link>{" "}
        </div>{" "}
        <div className="callToActions">
          {" "}
          {currentUser && (
            <ul>
              <li>
                <span onClick={() => auth.signOut()}> Log out </span>{" "}
              </li>{" "}
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration"> Register </Link>{" "}
              </li>{" "}
              <li>
                <Link to="/login"> Login </Link>{" "}
              </li>{" "}
            </ul>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(Header);
