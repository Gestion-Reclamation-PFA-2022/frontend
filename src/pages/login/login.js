import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFunction = () => {
    axios
      .post(
        "http://localhost:3001/api/:role/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        console.log("logged In successfully");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <h1>login page</h1>
      <input
        name="email"
        type="email"
        placeholder="your email"
        onChange={(event) => {
          setEmail(event.target.value);
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
          loginFunction();
        }}
      ></button>
    </div>
  );
};

export default Login;
