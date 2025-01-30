import {
    Box,
    Button,
    Text,
    Textarea,
    Stack,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
    HStack,
} from "@chakra-ui/react";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../AppContext";

const PostCard = ({ post, onEdit, onDelete }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { userId } = useContext(AuthContext);

    return (
        <>
            <Box
                onClick={onOpen}
                cursor="pointer"
                boxShadow="md"
                borderRadius="lg"
                bg="white"
                p={4}
                transition="all 0.3s ease-in-out"
                _hover={{
                    transform: "scale(1.05)",
                }}
            >
                <Text>{post.title}</Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <HStack spacing={"auto"} maxW={80} align={"baseline"}>
                            <Text
                                color={"green.500"}
                                textTransform={"uppercase"}
                                fontWeight={"bold"}
                                fontSize={"sm"}
                                letterSpacing={1.1}
                            >
                                {post.author.name}
                            </Text>
                            {post.authorid === userId && (
                                <Box mt={4}>
                                    <Button colorScheme="blue" onClick={() => onEdit(post)} size={"sm"}>
                                        Edit
                                    </Button>
                                    <Button
                                        colorScheme="red"
                                        onClick={() => onDelete(post.id)}
                                        ml={2}
                                        size={"sm"}
                                    >
                                        Delete
                                    </Button>
                                </Box>
                            )}
                        </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Heading fontSize={"lg"} fontFamily={"body"}>
                            {post.title}
                        </Heading>
                        <Textarea value={post.content} color={"gray.500"} maxH={"15lh"} isReadOnly/>
                    </ModalBody>
                    <ModalFooter>
                        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                            <Text fontWeight={600}>
                                Created at: {new Date(post.createdAt).toLocaleString()}
                            </Text>
                            <Text color={"gray.500"}>
                                Updated at: {new Date(post.updatedAt).toLocaleString()}
                            </Text>
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        authorid: PropTypes.string.isRequired,
        author: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default PostCard;
