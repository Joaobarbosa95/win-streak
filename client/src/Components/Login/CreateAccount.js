import React from "react";

// CSS
import "./Login.css";

const CreateAccount = () => {
  return (
    <div class="container" onclick="onclick">
      <div class="top"></div>
      <div class="bottom"></div>
      <form div class="center">
        <h2>Please Sign In</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="repeat-password" placeholder="reapeat-password" />
        <input value="Create account" />
        <a href="/login">Already have an account?</a>
      </form>
    </div>
  );
};

export default CreateAccount;
