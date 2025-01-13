import { Stack, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../../components/AuthLayout";
import AuthForm from "../../components/AuthForm";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5555/login", form);
      const { token } = response.data;
      localStorage.setItem("jwtToken", token);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthLayout>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Realize seu Login
        </Heading>
      </Stack>
      <form onSubmit={handleSubmit}>
        <AuthForm showNameField={false} form={form} onChange={handleChange}/>
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
            Entrar
          </Button>
        </Stack>
      </form>
    </AuthLayout>
  );
};
export default Login;
