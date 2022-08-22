import React, { useState } from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Alert from "../alert/alert.componet";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const isUser = isAuthenticated && user;
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
      {isUser ? (
        <Link to="/products">Products</Link>
      ) : (
        <Link to="/">Products</Link>
      )}
    </div>
  );
};

export default Navbar;
