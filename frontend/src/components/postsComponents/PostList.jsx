import { Box, Button, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PostList = ({ post, onEdit }) => {
    return (
        <Stack spacing={4} width={'100%'} p={4} bg={'#F8EDEB'} borderRadius={'lg'}>
            {post.map((post) => (
                <Box key={post.id} shadow="md" p={4} borderWidth={1} borderRadius={8}>
                    <Text fontSize="xl" fontWeight="bold">{post.title}</Text>
                    <Text fontSize="md">{post.content}</Text>
                    <Button colorScheme="blue" onClick={() => onEdit(post)}>Edit</Button>
                </Box>
            ))}
        </Stack>
    );
};

PostList.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default PostList;