import {
    Box,
    Button,
    Stack,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const PostList = ({ posts, onEdit, onDelete }) => {
    return (
        <Stack spacing={4} width={"100%"} p={4} bg={"#F8EDEB"} borderRadius={"lg"}>
            {posts && posts.length > 0 ? (
                posts.map((post) => (
                    <Accordion key={post.id} allowToggle>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    <Text fontSize="xl">{post.title}</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text fontSize="md">{post.content}</Text>
                                <Text fontSize="sm" color="gray.500">Posted by:  {post.author.name}</Text>
                                <Text fontSize="sm" color="gray.500">Created at: {new Date(post.createdAt).toLocaleString()}</Text>
                                <Text fontSize="sm" color="gray.500">Updated at: {new Date(post.updatedAt).toLocaleString()}</Text>
                                <Button colorScheme="blue" onClick={() => onEdit(post)}>
                                    Edit
                                </Button>
                                <Button colorScheme="red" onClick={() => onDelete(post.id)}>
                                    Delete
                                </Button>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
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
            author: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
            createdAt: PropTypes.string.isRequired,
            updatedAt: PropTypes.string.isRequired,
        })),
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default PostList;
