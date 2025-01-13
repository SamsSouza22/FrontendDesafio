import { Flex, Heading, Spacer, HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Flex
            as="nav"
            align="center"
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
                    <Link
                        as={RouterLink}
                        to="/"
                        _hover={{ textDecoration: "none", color: "gray.600" }}
                        fontWeight={500}
                        transition="color 0.2s"
                    >
                        Home
                    </Link>
                </Heading>
                <Heading as="h2" size="md" color="black">
                    <Link
                        as={RouterLink}
                        to="/auth/login"
                        _hover={{ textDecoration: "none", color: "gray.600" }}
                        fontWeight={500}
                        transition="color 0.2s"
                    >
                        Log In
                    </Link>
                </Heading>
                <Heading as="h2" size="md" color="black">
                    <Link
                        as={RouterLink}
                        to="/auth/register"
                        _hover={{ textDecoration: "none", color: "gray.600" }}
                        fontWeight={500}
                        transition="color 0.2s"
                    >
                        Register
                    </Link>
                </Heading>
            </HStack>
            <Spacer />

        </Flex>
    );
}

export default NavBar;