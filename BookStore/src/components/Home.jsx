import { Box, Text, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Home(){
    const books = useSelector((store) => store.books.items);
    return(
        <>
            {(books.length > 0) &&
            (<Flex bg="#EDF2F7" wrap="wrap" minH="90vh">
                <Text w="100%" h="5rem" textDecoration='underline' display={"flex"} alignItems="center" justifyContent="center" color="#718096" fontSize='2xl'>Welcome To My Book Store</Text>
                <Flex w="100%" alignItems="center" justifyContent='space-around' wrap="wrap">
                    <Box w="21rem" p='30'>
                        <Text w="100%" h="5rem" display={"flex"} alignItems="center" justifyContent="center" color="#718096">Top Selling Book</Text>
                        <Card id={books[0].id} src={books[0].cover_image} title={books[0].title} />
                    </Box>
                    <Box w="21rem" p='30'>
                        <Text w="100%" h="5rem" display={"flex"} alignItems="center" justifyContent="center" color="#718096">Top Classic Book</Text>
                        <Card id={books[1].id} src={books[1].cover_image} title={books[1].title} />
                    </Box>
                    <Box w="21rem" p='30'>
                        <Text w="100%" h="5rem" display={"flex"} alignItems="center" justifyContent="center" color="#718096">Top Fiction Book</Text>
                        <Card id={books[2].id} src={books[2].cover_image} title={books[2].title} />
                    </Box>
                    <Box w="21rem" p='30'>
                        <Text w="100%" h="5rem" display={"flex"} alignItems="center" justifyContent="center" color="#718096">Top SciFi Book</Text>
                        <Card id={books[3].id} src={books[3].cover_image} title={books[3].title} />
                    </Box>
                </Flex>
            </Flex>)}
        </>
    )
}