import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import React from "react";
import "firebase/auth";
import { auth } from "../firebase";
function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Unitchat!</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <div className="login-button facebook"
         onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
