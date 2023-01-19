import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
        console.log(res.data);
        setMyReclamations([...res.data]);
        console.log(myReclamations);
      })
      .catch((err) => {
        console.log(err.response.data);
        navigate("/login/user");
      });
  }, []);

  const logout = () => {
    axios
      .post(
        "http://localhost:3001/api/user/logout",
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        navigate("/login/user");
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const deleteOne = (id) => {
    axios
      .post(
        "http://localhost:3001/api/user/me/delete/" + id,
        {},
        {
          withCredentials: true,
        }
      )
      .then(() => {
        navigate("/me");
        window.location.reload();
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
            <BreadcrumbLink color="#1C3879" href="/me/new-reclamation">
              create reclamation
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
            Mes Reclamations
          </Text>
        </Box>
      </div>
      <center>
        <TableContainer width="80%">
          <Table variant="simple">
            <TableCaption>ma liste des reclamations</TableCaption>
            <Thead>
              <Tr>
                <Th color="#1C3879"> ID </Th>
                <Th color="#1C3879"> Subject </Th>
                <Th color="#1C3879"> Description </Th>
                <Th color="#1C3879"> Date </Th>
                <Th color="#1C3879"> Edit </Th>
                <Th color="#1C3879"> Suprimer </Th>
              </Tr>
            </Thead>
            <Tbody>
              {myReclamations.map((val) => {
                return (
                  <Tr>
                    <Td> {val.id}</Td>
                    <Td> {val.subject}</Td>
                    <Td> {val.description}</Td>
                    <Td> {val.date}</Td>
                    <Td>
                      {" "}
                      <Link
                        to={{
                          pathname: "/me/edit/" + val.id,
                        }}
                      >
                        edit
                      </Link>
                    </Td>
                    <Td>
                      {" "}
                      <button
                        onClick={() => {
                          deleteOne(val.id);
                        }}
                      >
                        delete
                      </button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </center>
    </div>
  );
};

export default Me;
