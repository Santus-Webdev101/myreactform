import React, { useState } from 'react';
import './App.css';

type MyForm = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  age: number;
};
const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
// this function validates the age input
const validateAge = (age: number) => {
  return age > 0 && age < 100;
};
function App() {
  const [inputs, setInputs] = useState<MyForm>({
    username: "",
    age: 0,
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: ""
  });
  
  const [errorMessage, setErrorMessage] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    if (!validateEmail(inputs.username)) {
      setErrorMessage("Invalid email");
      return;
    }
    if (!validateAge(inputs.age)) {
      setErrorMessage("Invalid age");
      return;
    }
    alert("Form submitted successfully");
  };
  return (
    <>
      <h2>React Forms</h2>
      <form className="my-form" onSubmit={handleSubmit} noValidate>
  <label>
    Username
    <input type="text" name="username" onChange={handleChange} />
  </label>
  <label>
    First Name
    <input type="text" name="firstName" onChange={handleChange} />
  </label>
  <label>
    Last Name
    <input type="text" name="lastName" onChange={handleChange} />
  </label>
  <label>
    Password
    <input type="password" name="password" onChange={handleChange} />
  </label>
  <label>
    Confirm Password
    <input type="password" name="confirmPassword" onChange={handleChange} />
  </label>
  <label>
    Age
    <input type="number" name="age" onChange={handleChange} />
  </label>
  {errorMessage!== "" && <p className="error">{errorMessage}</p>}
  <button type="submit">Submit</button>
</form>
    </>
  );
}

export default App;
