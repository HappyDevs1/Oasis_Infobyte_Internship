import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);


  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const endpoint = "http://localhost:3000/users";

  const compareUserData = () => {
    axios(endpoint)
    .then((response) => {
      response.data.indexOf((user) => {
        // console.log(user.email)
        if (email === user.email && password === user.password) {
          alert("Login sucessful");
          setLoggedIn(true);
        } else {
          alert("Loggin in failed")
        }
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    compareUserData();
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailInput} />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={password || ""}
          onChange={handlePasswordInput}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
