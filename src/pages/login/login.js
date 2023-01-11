import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { role } = useParams();
  const navigate = useNavigate();

  const loginFunction = () => {
    axios
      .post(
        "http://localhost:3001/api/" + role + "/login",
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
        navigate("/me");
      })
      .catch((err) => {
        err.response.data.reason === "role undefined"
          ? navigate("/login/user")
          : console.log(err.response.data.reason);
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
            mr="20px"
            borderRadius="5px"
            p="10px"
            bg="white"
            right="280px"
          >
            <BreadcrumbLink color="#1C3879" href="/signup/user">
              Signup
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem
            pos="absolute"
            mt="60px"
            mr="20px"
            borderRadius="5px"
            p="10px"
            bg="white"
            right="125px"
          >
            <BreadcrumbLink color="#1C3879" href="/docs">
              Documentation
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
            Login
          </Text>
        </Box>
      </div>
      <center>
        <Stack spacing={3} width="35%">
          <Input
            name="email"
            type="email"
            placeholder="your email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />{" "}
          <br></br>
          <Input
            name="password"
            type="password"
            placeholder="your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />{" "}
          <br></br>
          <a href="/signup/user">Creer un compte !</a>
          <br></br>
          <Button
            color="#1C3879"
            colorScheme="#1C3879"
            variant="outline"
            onClick={() => {
              loginFunction();
            }}
            type="submit"
          >
            Login
          </Button>
        </Stack>
      </center>
    </div>
  );
};

export default Login;
