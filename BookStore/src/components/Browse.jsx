import { Box, Button, Flex, Select, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Card from "./Card";

export default function Browse(){
    const [searchName, setSearchName] = useState("");
    const [category, setCategory] = useState("");
    const tempArray = useSelector((store) => store.books.items);
    const [books , setBooks] = useState(tempArray);
    function filterByCategory(c) {
        setCategory(c);
        setBooks((c != "")?tempArray.filter((book) => (book.genre.includes(c))):tempArray);
    }
    function filterByName(){
        if(searchName.trim() != "") {
            const array = books.filter((book) => (book.title.toLowerCase().includes(searchName.toLowerCase())));
            if(array.length > 0) setBooks(array);
        }
        else{ filterByCategory(category) }
    }
    return (
        <>
            {(tempArray.length > 0) &&
            (<Flex bg="#EDF2F7" wrap="wrap" minH="90vh">
                <Flex w="100%" h="5rem" alignItems="center" justifyContent="center" wrap="wrap">
                    <Select placeholder='Category' w="12rem" bg="#CBD5E0" color="#4A5568" m="10px" onChange={(e) => filterByCategory(e.target.value)}>
                        <option value='Classic'>Classic</option>
                        <option value='Fiction'>Fiction</option>
                        <option value='Dystopian'>Dystopian</option>
                        <option value='Romance'>Romance</option>
                        <option value='Coming-of-age'>Coming-of-age</option>
                        <option value='Fantasy'>Fantasy</option>
                        <option value='Epic'>Epic</option>
                        <option value='Mythology'>Mythology</option>
                    </Select>
                    <Flex alignItems="center" justifyContent="center" m="10px">
                        <Input placeholder='Book name' borderWidth="3px" borderColor="#CBD5E0" maxW="30rem" borderTopRightRadius="0px" borderBottomRightRadius="0px" value={searchName} onChange={(e) => {setSearchName(e.target.value)}}/>
                        <Button bg="#CBD5E0" color="#4A5568" borderTopLeftRadius="0px" borderBottomLeftRadius="0px" onClick={filterByName}>Search</Button>
                    </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent='space-around' wrap="wrap" bg="#EDF2F7">
                { books.map((book) => (
                        <Box key={book.id} maxW="21rem" p='30'>
                            <Card id={book.id} src={book.cover_image} title={book.title} />
                        </Box> 
                    ))}
                </Flex>
            </Flex>)}
        </>
    )
}