import { Box, Button, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PostList = ({ posts, onEdit, onDelete }) => {
    return (
        <Stack spacing={4} width={"100%"} p={4} bg={"#F8EDEB"} borderRadius={"lg"}>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <Box key={post.id} shadow="md" p={4} borderWidth={1} borderRadius={8}>
                        <Text fontSize="xl" fontWeight="bold">{post.title}</Text>
                        <Text fontSize="md">{post.content}</Text>
                        <Button colorScheme="blue" onClick={() => onEdit(post)}>Edit</Button>
                        <Button colorScheme="red" onClick={() => onDelete(post.id)}>Delete</Button>
                    </Box>
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
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default PostList;
