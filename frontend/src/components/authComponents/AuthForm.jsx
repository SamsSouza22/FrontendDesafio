import { useState } from "react";
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
import { loginSchema, registerSchema } from "../../utils/schemas.mjs";

const AuthForm = ({ showNameField, onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);
  const schema = showNameField ? registerSchema : loginSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Box
      rounded={"lg"}
      width={"100%"}
      height={"100%"}
      border={"2px solid"}
      bg={useColorModeValue("#F8EDEB", "gray.700")}
      boxShadow={"lg"}
      p={8}
    >
      <Stack spacing={4}>
        {showNameField && (
          <Box>
            <FormControl id="firstName" isInvalid={errors.name} isRequired>
              <FormLabel>Nome</FormLabel>
              <Input {...register("name")} type="text" />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
          </Box>
        )}
        <Box>
          <FormControl id="email" isInvalid={errors.email} isRequired>
            <FormLabel>Email</FormLabel>
            <Input {...register("email")} type="email" />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        <Box>
          <FormControl id="password" isInvalid={errors.password} isRequired>
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <Input
                {...register("password")}
                type={showPassword ? "text" : "password"}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() => setShowPassword((show) => !show)}
                >
                  {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
        </Box>
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
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

AuthForm.propTypes = {
  showNameField: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,};

export default AuthForm;
