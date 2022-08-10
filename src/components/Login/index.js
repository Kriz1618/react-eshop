import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import StorefrontSharpIcon from "@mui/icons-material/StorefrontSharp";

import { auth } from "../../firebase";
import { useStateValue } from "../../provider/stateProvider";

export function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* eslint-disable no-unused-vars */
  const [_, dispatch] = useStateValue();

  const changeLogginStatus = (status) => {
    dispatch({
      type: "LOGIN_STATUS",
      login: status,
      user: email.substring(0, 6).replace(/^./, email[0].toUpperCase())
    });
  };

  const loggedUser = () => {
    changeLogginStatus(true);
    setEmail('');
    setPassword('');
    setTimeout(() => {
      console.log('27', 'email', email, password);
      history('/');
    }, 100);

  }
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        if (auth) {
          console.log('36', 'auth', auth);
          loggedUser();
        }
      })
      .catch(error => alert(error.message))
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          loggedUser();
        }
      })
      .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <Link to='/' style={{ textDecoration: "none" }}>
        <div className="login__logo">
          <StorefrontSharpIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
            // disebled={!email || !password}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}
