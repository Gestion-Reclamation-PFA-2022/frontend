import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Me = () => {
  const [myReclamations, setMyReclamations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", {
        withCredentials: true,
      })
      .then(() => {
        console.log("welcome");
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/login/user");
      });
  }, []);

  return (
    <div>
      <h1>My Reclamations List</h1>
    </div>
  );
};

export default Me;
