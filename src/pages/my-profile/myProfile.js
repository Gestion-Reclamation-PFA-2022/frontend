import { useEffect, useState } from "react";
import axios from "axios";

const MyProfile = () => {
  const [myReclamations, setMyReclamations] = useState([]);

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
      });
  }, []);

  const listReclamations = () => {};

  return (
    <div>
      <h1>My Reclamations List</h1>
    </div>
  );
};

export default MyProfile;
