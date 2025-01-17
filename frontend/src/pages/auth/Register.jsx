import {
  Stack,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
  useToast
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/authComponents/AuthLayout";
import AuthForm from "../../components/authComponents/AuthForm";
import axios from 'axios';
import {errorHandler} from '../../utils/errorHandler.mjs';
import { AuthContext } from "../../AppContext";
import { useContext } from "react";

const Register = () => {
  const toast = useToast();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5555/register", data);
      const { token, user } = response.data;
      login(token, user.id);
      navigate("/");
    } catch (error) {
      const message = errorHandler(error);
      toast({
        title: "Erro",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <AuthLayout>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Resgistre-se em nossa plataforma
        </Heading>
      </Stack>
        <AuthForm showNameField={true} onSubmit={handleSubmit} />
      <Stack pt={6}>
        <Text align={"center"}>
          Já tem um cadastro?{" "}
          <ChakraLink as={Link} to="/auth/login" color={"blue.400"}>
            Login
          </ChakraLink>
        </Text>
      </Stack>
    </AuthLayout>
  );
};

export default Register;
