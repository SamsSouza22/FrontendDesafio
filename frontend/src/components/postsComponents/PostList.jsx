import {
  Box,
  Center,
  Stack,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import PostCard from "./PostCard.jsx";

const PostList = ({ posts, onEdit, onDelete }) => {
  return (
    <Stack spacing={4} width={"2xl"} p={4} bg={"#F8EDEB"} borderRadius={"lg"} >
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
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={"bold"}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {post.author.name}
              </Text>
              <PostCard
                key={post.id}
                post={post}
                onEdit={onEdit}
                onDelete={onDelete}
              />
              <Text fontWeight={600} fontSize={"md"}>
                Created at: {new Date(post.createdAt).toLocaleString()}
              </Text>
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
