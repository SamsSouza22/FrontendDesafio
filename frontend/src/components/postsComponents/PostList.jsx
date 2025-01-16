import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  Heading,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../../AppContext.jsx";

const PostList = ({ posts, onEdit, onDelete }) => {
  const { userId } = useContext(AuthContext);
  return (
    <Stack spacing={4} width={"100%"} p={4} bg={"#F8EDEB"} borderRadius={"lg"}>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <Center py={6} key={post.id}>
            <Box
              maxW={"445px"}
              w={"full"}
              boxShadow={"2xl"}
              rounded={"md"}
              p={6}
              overflow={"hidden"}
            >
              <Stack>
                <Text
                  color={"green.500"}
                  textTransform={"uppercase"}
                  fontWeight={800}
                  fontSize={"sm"}
                  letterSpacing={1.1}
                >
                  {post.author.name}
                </Text>
                <Heading fontSize={"2xl"} fontFamily={"body"}>
                  {post.title}
                </Heading>
                <Text color={"gray.500"}>{post.content}</Text>
              </Stack>
              <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                  <Text fontWeight={600}>
                    Created at: {new Date(post.createdAt).toLocaleString()}
                  </Text>
                  <Text color={"gray.500"}>
                    Updated at: {new Date(post.updatedAt).toLocaleString()}
                  </Text>
                  {post.authorid === userId && (
                    <Box mt={4}>
                      <Button colorScheme="blue" onClick={() => onEdit(post)}>
                        Edit
                      </Button>
                      <Button
                        colorScheme="red"
                        onClick={() => onDelete(post.id)}
                        ml={2}
                      >
                        Delete
                      </Button>
                    </Box>
                  )}
                </Stack>
              </Stack>
            </Box>
          </Center>
        ))
      ) : (
        <Text>No posts available</Text>
      )}
    </Stack>
  );
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      authorid: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostList;
