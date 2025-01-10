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

const AuthForm = ({showNameField}) => {
    const [showPassword, setShowPassword] = useState(false);

    return(
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
                    <Input type="text" />
                  </FormControl>
                </Box>
            )}
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Senha</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
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