import { Stack, Heading, useToast, Spinner } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthLayout from "../../components/authComponents/AuthLayout";
import AuthForm from "../../components/authComponents/AuthForm";
import { errorHandler } from "../../utils/errorHandler.mjs";
import { AuthContext } from "../../AppContext";
import { VITE_API_URL } from "../../utils/secrets.mjs";

const Login = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post(`${VITE_API_URL}/login`, data);
      const { token, user } = response.data;
      login(token, user.id);
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
