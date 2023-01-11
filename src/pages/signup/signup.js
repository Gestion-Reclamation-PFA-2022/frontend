import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

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
        err.response.data.reason === "role undefined"
          ? navigate("/signup/user")
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
            <BreadcrumbLink color="#1C3879" href="/login/user">
              Login
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
            Signup
          </Text>
        </Box>
      </div>
      <center>
        <Stack spacing={3} width="35%">
          <Input
            name="name"
            type="text"
            placeholder="your name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />{" "}
          <br></br>
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
            name="phone"
            type="text"
            placeholder="your phone"
            onChange={(event) => {
              setPhone(event.target.value);
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
          <Button
            color="#1C3879"
            colorScheme="#1C3879"
            variant="outline"
            onClick={() => {
              signupFunction();
            }}
            type="submit"
          >
            Signup
          </Button>
        </Stack>
      </center>
    </div>
  );
};

export default Signup;
