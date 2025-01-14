import {
  Button,
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { z } from "zod";
import { postSchema } from "../../utils/schemas.mjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";


const PostForm = ({ form, onChange, onSubmit }) => {
  const { register, handleSubmit, formState: { errors }} = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: form,
  });

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("#ffe5d9", "gray.800")}
    >
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
          <Box>
            <FormControl id="title" isRequired>
              <FormLabel>Título</FormLabel>
              <Input
                {...register("title")}
                onChange={onChange}
                type="text"
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <FormControl id="content" isRequired>
            <FormLabel>Conteúdo</FormLabel>
            <Input
              {...register("content")}
              onChange={onChange}
              type="text"
            />
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>
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
    </Flex>
  );
};

PostForm.propTypes = {
  form: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
