import {
  Button,
  Flex,
  useDisclosure,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostList from "../components/postsComponents/PostList.jsx";
import PostModal from "../components/postsComponents/PostModal.jsx";
import Pagination from "../components/postsComponents/Pagination.jsx";
import { errorHandler } from "../utils/errorHandler.mjs";
import { VITE_API_URL } from "../utils/secrets.mjs"

const Home = () => {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [currentPostId, setCurrentPostId] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = localStorage.getItem("userId");
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${VITE_API_URL}/posts`, {
          params: {
            page,
            perPage: 2,
          },
        });
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [page]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (isEditing) {
        await axios.put(`${VITE_API_URL}/posts/${currentPostId}`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
      } else {
        await axios.post(`${VITE_API_URL}/posts`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
      }
      onClose();
      const response = await axios.get(`${VITE_API_URL}/posts`, {
        params: {
          page,
          perPage: 2,
        },
      });
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      const message = errorHandler(error);
      toast({
        title: "Erro",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setIsEditing(false);
    onOpen();
  };

  const handleEdit = (post) => {
    if (post.authorid !== userId) {
      alert("Você não tem permissão para editar esse post");
      return;
    }
    setCurrentPostId(post.id)
    setCurrentPost(post);
    setIsEditing(true);
    onOpen();
  };

  const handleDelete = async (postId) => {
    setLoading(true);
    try {
      const post = posts.find((post) => post.id === postId);
      if (post.authorid !== userId) {
        alert("Você não tem permissão para deletar esse post");
        return;
      }
      await axios.delete(`${VITE_API_URL}/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });
      const response = await axios.get(`${VITE_API_URL}/posts`, {
        params: {
          page,
          perPage: 2,
        },
      });
      setPosts(response.data.posts);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      const message = errorHandler(error);
      toast({
        title: "Erro",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"#ffe5d9"}
      direction={"column"}
      p={4}
    >
      <Button onClick={handleCreate} colorScheme="blue" mb={4}>
        Novo Post
      </Button>
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <>
          <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
          <Pagination
            page={page}
            totalPages={totalPages}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </>
      )}
      <PostModal
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        title={isEditing ? "Edit Post" : "Create Post"}
        post={currentPost}
      />
    </Flex>
  );
};

export default Home;
