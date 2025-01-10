import React from "react";
import { Stack, Button, Heading } from "@chakra-ui/react";
import AuthLayout from "../../components/AuthLayout";
import AuthForm from "../../components/AuthForm";

const Login = () => {
    return (
        <AuthLayout>
            <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                    Realize seu Login
                </Heading>
            </Stack>
            <AuthForm showNameField={false} />
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
                    Entrar
                </Button>
            </Stack>
        </AuthLayout>
    );
};
export default Login;