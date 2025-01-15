import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { postSchema } from "../../utils/schemas.mjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";

const PostForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
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
      <form id="post-form" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={4}>
          <Box>
            <FormControl id="title" isInvalid={errors.title} isRequired>
              <FormLabel>Título</FormLabel>
              <Input {...register("title")} type="text" />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <FormControl id="content" isInvalid={errors.content} isRequired>
            <FormLabel>Conteúdo</FormLabel>
            <Input {...register("content")} type="text" />
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PostForm;
