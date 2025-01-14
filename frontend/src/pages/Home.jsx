import { Button, Flex, useDisclosure, useToast, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import PostList from "../components/postsComponents/PostList.jsx";
import PostModal from "../components/postsComponents/PostModal.jsx";
import Pagination from "../components/postsComponents/Pagination.jsx";
import { errorHandler } from "../utils/errorHandler.mjs";

const Home = () => {
    const [form, setForm] = useState({ title: "", content: "" });
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPostId, setCurrentPostId] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userId = localStorage.getItem("userId");
    const toast = useToast();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5555/posts`, {
                    params: {
                        page,
                        perPage: 2,
                    }});
                setPosts(response.data.posts);
                setTotalPages(response.data.totalPages);
            } catch (error) {
                console.error(error);
            }
        };
        fetchPosts();
    }, [page]);

    const onSubmit = async (e) => { 
        setLoading(true);
        try {
            if(isEditing) {
                await axios.put(`http://localhost:5555/posts/${currentPostId}`, form, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                });
            } else{
                await axios.post(`http://localhost:5555/posts`, form, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                    },
                });
            }
            onClose();
            const response = await axios.get(`http://localhost:5555/posts`, {
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
        setForm({ title: "", content: "" });
        setIsEditing(false);
        onOpen();
    };

    const handleEdit = (post) => { 
        if(post.authorid !== userId){
            alert("Você não tem permissão para editar esse post");
            return;
        }
        setForm({ title: post.title, content: post.content });
        setCurrentPostId(post.id);
        setIsEditing(true);
        onOpen();
    };
    
    const handleDelete = async (postId) => {
        setLoading(true);
        try {
            const post = posts.find((post) => post.id === postId);
            if(post.authorid !== userId){
                alert("Você não tem permissão para deletar esse post");
                return;
            }
            await axios.delete(`http://localhost:5555/posts/${postId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
                },
            });
            const response = await axios.get(`http://localhost:5555/posts`, {
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
    }

    const onChange = (e) => { 
        setForm({ ...form, [e.target.name]: e.target.value });
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
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={"#ffe5d9"} direction={"column"} p={4}> 
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
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                title={isEditing ? "Edit Post" : "Create Post"}
            />
        </Flex>
    );
};

export default Home;
