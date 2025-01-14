import {
  Stack,
  Button,
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../components/authComponents/AuthLayout";
import AuthForm from "../../components/authComponents/AuthForm";
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5555/register", form);
      console.log(response);
      navigate('/auth/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthLayout>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Resgistre-se em nossa plataforma
        </Heading>
      </Stack>
      <form onSubmit={handleSubmit}>
        <AuthForm showNameField={true} form={form} onChange={handleChange} />
        <Stack spacing={10} pt={2}>
          <Button
            type="submit"
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
      </form>
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
