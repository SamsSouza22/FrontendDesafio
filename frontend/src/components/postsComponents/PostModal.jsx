import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import PostForm from "./PostForm.jsx";
import PropTypes from "prop-types";

const PostModal = ({ isOpen, onClose, onSubmit, title, post }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PostForm onSubmit={onSubmit} initialValues={post}/>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" colorScheme="blue" form="post-form" mr={3}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

PostModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

export default PostModal;
