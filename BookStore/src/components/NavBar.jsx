import { Box, Link, Text, Flex } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";

export default function NavBar() {
    return (
        <Flex h="10vh" alignItems="center" justifyContent="space-between" bg="#2D3748">
            <Text fontSize="lg" ml="20px" color="#EDF2F7">Book Store</Text>
            <Box>
                <Link as={RouterLink} to="/" mr="20px" color="#EDF2F7">Home</Link>
                <Link as={RouterLink} to="/books" mr="20px" color="#EDF2F7">Browse Book</Link>
                <Link as={RouterLink} to="/addBook" mr="20px" color="#EDF2F7">Add Book</Link>
            </Box>
        </Flex>
    )
}