import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
  useColorModeValue,
  Textarea
} from "@chakra-ui/react";
import { postSchema } from "../../utils/schemas.mjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";

const PostForm = ({ onSubmit, initialValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, 
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: initialValues || {}, 
  });

  useEffect(() => {
    if (initialValues) {
      Object.keys(initialValues).forEach((key) =>
        setValue(key, initialValues[key])
      );
    }
  }, [initialValues, setValue]);
  
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
            <FormControl id="title" isInvalid={errors.title} noValidate>
              <FormLabel>Título</FormLabel>
              <Input {...register("title")} type="text"/>
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
          </Box>
          <FormControl id="content" isInvalid={errors.content} noValidate>
            <FormLabel>Conteúdo</FormLabel>
            <Textarea autoresize {...register('content')}/>
            <FormErrorMessage>{errors.content?.message}</FormErrorMessage>
          </FormControl>
        </Stack>
      </form>
    </Box>
  );
};

PostForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostForm;
