import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupFunction = () => {
    axios
      .post(
        "http://localhost:3001/api/:role/signup",
        {
          email: email,
          password: password,
          name: name,
          phone: phone,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        console.log("signup In successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <h1>SignUp page</h1>
      <input
        name="name"
        type="text"
        placeholder="your name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <input
        name="email"
        type="email"
        placeholder="your email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></input>
      <input
        name="phone"
        type="text"
        placeholder="your phone"
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      ></input>
      <input
        name="password"
        type="password"
        placeholder="your password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          signupFunction();
        }}
      ></button>
    </div>
  );
};

export default Signup;
