import { Flex, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import PropTypes from 'prop-types';

const AuthLayout = ({ children }) => {
  return(
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('#ffe5d9', 'gray.800')}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>{children}</Stack>    
      </Stack>
    </Flex>
  );
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthLayout;

