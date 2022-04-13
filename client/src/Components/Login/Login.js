import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div class="container" onclick="onclick">
      <div class="top"></div>
      <div class="bottom"></div>
      <form div class="center">
        <h2>Login</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input value="Login" type="submit" />
        <a href="/create-account">Don't have an account? </a>
      </form>
    </div>
  );
};

export default Login;
