import {
    Box,
    Input,
    FormControl,
    FormLabel,
    Stack,
    useColorModeValue,
    Flex
} from '@chakra-ui/react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const PostForm = () => {
    const [form, setForm] = useState({
        title: '',
        content: '',
    });
    const onChange = (e) => {
        console.log("teste");
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('#ffe5d9', 'gray.800')}>
            <Box
                rounded={'lg'}
                width={'100%'}
                height={'100%'}
                border={'2px solid'}
                bg={useColorModeValue('#F8EDEB', 'gray.700')}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                    <Box>
                        <FormControl id="title" isRequired>
                            <FormLabel>Título</FormLabel>
                            <Input value={form.title} name="name" onChange={onChange} type="text" />
                        </FormControl>
                    </Box>
                    <FormControl id="content" isRequired>
                        <FormLabel>Conteúdo</FormLabel>
                        <Input value={form.content} name="email" onChange={onChange} type="email" />
                    </FormControl>
                </Stack>
            </Box>
        </Flex>
    );
}

PostForm.propTypes = {
    form: PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired
};

export default PostForm;