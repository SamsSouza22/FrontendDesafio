import { Button, Flex, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";
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
    const { isOpen, onOpen, onClose } = useDisclosure();

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
        e.preventDefault();
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
            //atualizar posts
            const response = await axios.get(`http://localhost:5555/posts`, {
                params: {
                    page,
                    perPage: 2,
                },
            });
            setPosts(response.data.posts);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.log(error);
        }
    };
    
    const handleCreate = () => { 
        setForm({ title: "", content: "" });
        setIsEditing(false);
        onOpen();
    };

    const handleEdit = (post) => { 
        setForm({ title: post.title, content: post.content });
        setCurrentPostId(post.id);
        setIsEditing(true);
        onOpen();
    };
    

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
                onChange={onChange}
                onSubmit={onSubmit}
                title={isEditing ? "Edit Post" : "Create Post"}
            />
        </Flex>
    );
};

export default Home;
