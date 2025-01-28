import React, { useState } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import axios from 'axios';
import { VITE_API_URL } from '../../utils/secrets.mjs';
import { errorHandler } from '../../utils/errorHandler.mjs';

const AIDrawerForm = ({ onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        `${VITE_API_URL}/suggestions`,
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
          },
        }
      );
      setResponse(result.data.suggestion);
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
    <Box as="form" onSubmit={handleSubmit}>
      <FormControl id="prompt" isRequired>
        <FormLabel>Informe um tema</FormLabel>
        <Input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Digite aqui..."
        />
      </FormControl>
      <Button mt={4} colorScheme="blue" type="submit">
        Enviar
      </Button>
      {response && (
        <Box mt={4}>
          <FormLabel>Resposta da IA</FormLabel>
          <Textarea value={response} autoresize isReadOnly />
        </Box>
      )}
    </Box>
  );
};

export default AIDrawerForm;