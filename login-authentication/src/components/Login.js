import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const findUserById = () => {
    const endpoint = "http://localhost:3000/users";
    axios.get(endpoint)
  }

  const compareUser = (id) => {
    findUserById(id)
    .then((user) => {
      if (user.email === email && user.password === password) {
        console.log("Logged in successfully");
      } else {
        console.log("User not found");
      }
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    compareUser();
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
