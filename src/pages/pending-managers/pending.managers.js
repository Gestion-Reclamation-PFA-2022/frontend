import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PendingManagers = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/admin/me", {
        withCredentials: true,
      })
      .then((res) => {
        console.log("welcome");
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/login/admin");
      });
  }, []);

  return (
    <div>
      <h1>Pending Managers</h1>
    </div>
  );
};

export default PendingManagers;
