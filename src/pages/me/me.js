import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Me = () => {
  const [myReclamations, setMyReclamations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/user/me", {
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

  return (
    <div>
      <h1>My Reclamations List</h1>
    </div>
  );
};

export default Me;
