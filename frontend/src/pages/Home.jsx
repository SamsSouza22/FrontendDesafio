import { Button, Flex } from "@chakra-ui/react";

const Home = () =>{

return( 
    <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={'#ffe5d9'}
    > 
        <Button
            size="lg"
            bg={"blue.400"}
            color={"white"}
            _hover={{
                bg: "blue.500",
            }}
        >
            Home
        </Button>

    </Flex>
);

}

export default Home;