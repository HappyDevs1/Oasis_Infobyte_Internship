import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState([
    {
      id: 1,
      email: "happy20@gmail.com",
      password: "Happy123"
    }
  ]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (user) => {
    if (user.email === email && user.password === password) {
      console.log("Logged in successfully")
    } else {
      console.log("Incorrect email or password")
    }
  }

  return (
    <div onSubmit={handleSubmit}>
      <form>
        <h1>Login Page</h1>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailInput} />
        <br />
        <label>Password</label>
        <input type="text" value={password} onChange={handlePasswordInput} />
        <br/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
