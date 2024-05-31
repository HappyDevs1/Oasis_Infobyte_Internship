import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

function Signup() {
  const users = [];

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createdUser, setCreatedUSer] = useState(false)

  const endpoint = "http://localhost:3000/users";
  const uniqueId = uuid();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.length <= 6) {
      console.log("Name cannot be less than 6 characters")
    } else if (password.length <= 5) {
      console.log("Password cannot be less than 5 characters")
    } else {
      axios.post(endpoint, {
        id: uniqueId,
        name: name,
        surname: surname,
        email: email,
        password: password
      })
      .then((response) => {
        setCreatedUSer(true);
        console.log("New user created: ", response.data);
      })
      .catch((error) => {
        console.log("Error creating user: ", error)
      })
    }
  }

  const userMessage = () => {
    if(createdUser === true) {
      alert("Account created succesfully")
    } else {
      alert("Error creating an account")
    }
  }
  

  return (
    <div>
      <h1>Create a new user</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(event) => {
            setName(event.target.value)
          }}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Surname</Form.Label>
          <Form.Control onChange={(event) => {
            setSurname(event.target.value)
          }}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' onChange={(event) => {
            setEmail(event.target.value)
          }}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' onChange={(event) => {
            setPassword(event.target.value)
          }}/>
        </Form.Group>
        <button type='submit'>Submit</button>
        <p></p>
      </Form>
    </div>
  )
}

export default Signup;