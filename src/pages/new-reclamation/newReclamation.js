import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

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
        navigate("/me");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const logout = () => {
    axios
      .post("http://localhost:3001/api/user/logout", {
        withCredentials: true,
      })
      .then(() => {
        navigate("/login/user");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <div>
        <Breadcrumb
          w="100%"
          h="70px"
          bgGradient="linear(to-l, #1C3879, #AFB4FF)"
          spacing="2px"
          separator=""
        >
          <BreadcrumbItem
            pos="absolute"
            mt="60px"
            mr="10px"
            borderRadius="5px"
            p="10px"
            bg="white"
            right="180px"
          >
            <BreadcrumbLink color="#1C3879" href="/me">
              Mes Reclamations
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            pos="absolute"
            mt="60px"
            mr="20px"
            borderRadius="5px"
            p="10px"
            bg="white"
            right="80px"
          >
            <BreadcrumbLink color="#1C3879" href="/login/user" onClick={logout}>
              logout
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box
          mt="25px"
          mb="25px"
          pos="relative"
          left="25%"
          bg="white"
          color="#1C3879"
          width="50%"
          h="100px"
        >
          <Text fontSize="42px" p="12px">
            Nouvelle Reclamation
          </Text>
        </Box>
      </div>
      <center>
        <Stack spacing={3} width="35%">
          <Input
            name="subject"
            type="text"
            placeholder="subject"
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />{" "}
          <br></br>
          <Input
            name="description"
            type="text"
            placeholder="description"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />{" "}
          <br></br>
          <Input
            name="date"
            type="date"
            placeholder="date"
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />{" "}
          <br></br>
          <Button
            color="#1C3879"
            colorScheme="#1C3879"
            variant="outline"
            onClick={() => {
              createNewReclamation();
            }}
            type="submit"
          >
            create
          </Button>
        </Stack>
      </center>
    </div>
  );
};

export default NewReclamation;
