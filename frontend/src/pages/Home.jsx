import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import PostList from "../components/postsComponents/PostList.jsx";
import PostModal from "../components/postsComponents/PostModal.jsx";
import Pagination from "../components/postsComponents/Pagination.jsx";

const Home = () => {
    const [form, setForm] = useState({ title: "", content: "" });
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPostId, setCurrentPostId] = useState(null);
    const { isOpen, onClose } = useDisclosure();

    
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#ffe5d9"}>
      <Button onClick={handleCreate} colorScheme="blue" mb={4}>
        Novo Post
      </Button>
      <PostList posts={posts} onEdit={handleEdit} />
      <Pagination
        page={page}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        form={form}
        onSubmit={onSubmit}
        post={post}
        title={isEditing ? "Edit Post" : "Create Post"}
      />
    </Flex>
  );
};

export default Home;
