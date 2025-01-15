import { Stack, Heading, useToast, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../../components/authComponents/AuthLayout";
import AuthForm from "../../components/authComponents/AuthForm";
import { errorHandler } from "../../utils/errorHandler.mjs";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5555/login", data);
      const { token, user } = response.data;
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("userId", user.id);
      navigate("/");
    } catch (error) {
      const message = errorHandler(error);
      toast({
        title: "Erro",
        description: message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthLayout>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"} textAlign={"center"}>
          Realize seu Login
        </Heading>
      </Stack>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <AuthForm showNameField={false} onSubmit={handleSubmit} />
      )}
    </AuthLayout>
  );
};
export default Login;
