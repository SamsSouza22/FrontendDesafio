import { Flex, Heading, HStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AppContext";

const NavBar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <Flex
      as="nav"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p="20px"
      bg="blue.200"
      color="blue"
      position={"fixed"}
      top={0}
      zIndex={1000}
    >
      <HStack spacing="30px">
        <Heading as="h2" size="md" color="black">
          <Button as={RouterLink} to="/" colorScheme="blue">
            Home
          </Button>
        </Heading>
        {isLoggedIn ? (
          <>
            <Button onClick={logout} colorScheme="blue">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button as={RouterLink} to="/auth/login" colorScheme="blue">
              Login
            </Button>
            <Button as={RouterLink} to="/auth/register" colorScheme="blue">
              Register
            </Button>
          </>
        )}
      </HStack>
    </Flex>
  );
};

export default NavBar;
