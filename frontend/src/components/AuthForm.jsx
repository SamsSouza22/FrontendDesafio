import React, { useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  HStack,
  Button,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const AuthForm = ({ showNameField }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });


  const onChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    });
    return (
      <Box
        rounded={'lg'}
        width={'100%'}
        height={'100%'}
        border={'2px solid'}
        bg={useColorModeValue('#F8EDEB', 'gray.700')}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          {showNameField && (
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>Nome</FormLabel>
                <Input value={form.name} name="name" onChange={onChange} type="text" />
              </FormControl>
            </Box>
          )}
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input value={form.email} name="email" onChange={onChange} type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Senha</FormLabel>
            <InputGroup>
              <Input value={form.password} name="password" onChange={onChange} type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() => setShowPassword((showPassword) => !showPassword)}>
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </Stack>
      </Box>
    );
  }

  export default AuthForm;