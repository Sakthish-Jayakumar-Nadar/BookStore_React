import { Box, Text, Flex, Image, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Detail(){
    const { id } = useParams();
    const books = useSelector((store) => store.books.items); 
    const [bookDetail, setBookDetail] = useState({});
    useEffect(() => {
        if(id != undefined){
            const arr = books.filter((book) => book.id == id)
            if(arr != undefined && arr.length > 0){
                setBookDetail(arr[0]);
            }
        }
    },[])
    return(
        <Flex bg="#EDF2F7" alignItems="center" justifyContent="center" wrap="wrap" minH="90vh">    
            <Box maxW='sm' borderRadius='lg' bgColor='white' m='30'>
                <Image src="https://fakeimg.pl/667x1000/cc6600" w='full' h='350px' objectFit='cover'/>
            </Box>
            <Box>
                <Heading as='h1' fontSize='3xl' display="flex" alignItems="center" flexWrap="wrap" mb='3' color="#718096">
                    <Text fontSize='xl' color="#2D3748">Title : </Text>{bookDetail.title}
                </Heading>
                <Heading as='h4' fontSize='xl' display="flex" alignItems="center" flexWrap="wrap" mb='3' color="#718096">
                    <Text color="#2D3748">Author : </Text>{bookDetail.author}
                </Heading>
                <Heading as='h4' fontSize='xl' display="flex" alignItems="center" flexWrap="wrap" mb='3' color="#718096">
                    <Text color="#2D3748">Published year : </Text>{bookDetail.publication_year}
                </Heading>
                <Heading as='h4' fontSize='xl' display="flex" alignItems="center" flexWrap="wrap" mb='3' color="#718096">
                    <Text color="#2D3748">Category : </Text>{(bookDetail.genre && bookDetail.genre.length > 0)?bookDetail.genre.join(","):"NA"}
                </Heading>
                <Heading as='h4' fontSize='xl' display="flex" alignItems="center" flexWrap="wrap" mb='3' color="#718096">
                    <Text color="#2D3748">Description : </Text>{bookDetail.description}
                </Heading>
            </Box>
        </Flex>
    )
}