import {
  Stack,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AuthLayout from "../../components/AuthLayout";
import AuthForm from "../../components/AuthForm";

const Register = () => {
  return (
    <AuthLayout>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Resgistre-se em nossa plataforma
        </Heading>
      </Stack>
      <AuthForm showNameField={true} />
      <Stack spacing={10} pt={2}>
        <Button
          loadingText="Submitting"
          size="lg"
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
        >
          Registrar-se
        </Button>
      </Stack>
      <Stack pt={6}>
        <Text align={"center"}>
          Já tem um cadastro?{" "}
            <ChakraLink as={Link} to="/login" color={"blue.400"}>Login</ChakraLink>
        </Text>
      </Stack>
    </AuthLayout>
  );
};

export default Register;
