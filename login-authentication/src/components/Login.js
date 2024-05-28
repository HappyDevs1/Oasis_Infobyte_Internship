import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (handleLogin(email, password)) {
      history.push("/dashboard");
    } else {
      console.log("Incorrect email or password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailInput} />
        <br />
        <label>Password</label>
        <input type="password" value={password || ""} onChange={handlePasswordInput} />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
