import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewReclamation = () => {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me/", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("welcome");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/login/user");
      });
  }, []);

  const createNewReclamation = () => {
    axios
      .post(
        "http://localhost:3001/api/user/me/new-reclamation",
        {
          subject: subject,
          description: description,
          date: date,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        console.log("reclamation created");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <h1>create new reclamation</h1>
      <input
        name="subject"
        type="text"
        placeholder="subject"
        onChange={(event) => {
          setSubject(event.target.value);
        }}
      ></input>
      <input
        name="description"
        type="text"
        placeholder="description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
      <input
        name="date"
        type="date"
        placeholder="date"
        onChange={(event) => {
          setDate(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          createNewReclamation();
        }}
      >
        {" "}
        create
      </button>
    </div>
  );
};

export default NewReclamation;
