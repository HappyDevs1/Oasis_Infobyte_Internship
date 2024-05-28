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
  const [password, setPassword] = useState(null)

  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordInput = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const foundUser = user.find((user) => user.email === email && user.password === password);
  
  if (foundUser) {
    console.log("Logged in successfully")
  } else {
    console.log("Incorrect email or username")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <label>Email</label>
        <input type="text" value={email} onChange={handleEmailInput} />
        <br />
        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordInput} />
        <br/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
