import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { role } = useParams();
  const navigate = useNavigate();

  const signupFunction = () => {
    axios
      .post(
        "http://localhost:3001/api/" + role + "/signup",
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
        navigate("/login/user");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/signup/user");
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
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
