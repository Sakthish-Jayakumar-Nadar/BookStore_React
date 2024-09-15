import { Flex, Input, Select, Button, Text, Textarea } from "@chakra-ui/react"; 
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addBook } from "../../utils/booksSlice";
import BookData from "../../utils/BookData"
import { useNavigate } from "react-router-dom";

export default function AddBook(){
    const [title, setTitle] = useState("");
    const [author, setAutor] = useState("");
    const [publishedYear, setPublishedYear] = useState("");
    const [category, setCategory] = useState("");
    const [discription, setDiscription] = useState("");
    const [titleValid, setTitleValid] = useState(true);
    const [authorValid, setAutorValid] = useState(true);
    const [publishedYearValid, setPublishedYearValid] = useState(true);
    const [categoryValid, setCategoryValid] = useState(true);
    const [discriptionValid, setDiscriptionValid] = useState(true);
    const books = useSelector((store) => store.books.items);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(books.length == 0) BookData.forEach((book)=>{ dispatch(addBook(book))})
    },[])
    function HandleOnClick() {
        let isValid = true;
        if((title.trim()).length == 0){
            setTitleValid(false);
            isValid = false;
        }
        if((author.trim()).length == 0){ 
            setAutorValid(false);
            isValid = false;
        }
        if((publishedYear.trim()).length == 0){
            setPublishedYearValid(false);
            isValid = false;
        }
        if((category.trim()).length == 0){ 
            setCategoryValid(false);
            isValid = false;
        }
        if((discription.trim()).length == 0){
            setDiscriptionValid(false);
            isValid = false;
        }
        if(isValid){
            dispatch(addBook(
                {
                    id: (books.length + 1),
                    title: title,
                    author: author,
                    publication_year: publishedYear,
                    genre: [ category ],
                    description: discription,
                    cover_image: "https://fakeimg.pl/667x1000/cc6600"
                }
            ))
            setTitle("");
            setAutor("");
            setCategory("");
            setPublishedYear("");
            setDiscription("");
            navigate("/books");
        }
    }
    return (
        <Flex bg="#EDF2F7" alignItems="center" justifyContent="center" wrap="wrap" minH="90vh" direction="column">    
            <Text h="3rem" textDecoration='underline' color="#718096" fontSize='2xl'>Add book form</Text>

            <Input placeholder='Title' borderWidth="3px" borderColor={titleValid ? "#CBD5E0" : "#FC8181"} maxW="30rem" mt="10px" value={title} onChange={(e) => setTitle(e.target.value)} onFocus={() => setTitleValid(true)}/>
            <Text display={titleValid ? "none" : "block"} color="#FC8181">Required</Text>

            <Input placeholder='Author' borderWidth="3px" borderColor={authorValid ? "#CBD5E0" : "#FC8181"} maxW="30rem" mt="10px" value={author} onChange={(e) => setAutor(e.target.value)} onFocus={() => setAutorValid(true)}/>
            <Text display={authorValid ? "none" : "block"} color="#FC8181">Required</Text>

            <Select placeholder='Category' maxW="30rem" bg="#CBD5E0" borderColor={categoryValid ? "#CBD5E0" : "#FC8181"} color="#4A5568" mt="10px" onChange={(e) => setCategory(e.target.value)} onFocus={() => setCategoryValid(true)}>
                <option value='Classic'>Classic</option>
                <option value='Fiction'>Fiction</option>
                <option value='Dystopian'>Dystopian</option>
                <option value='Romance'>Romance</option>
                <option value='Coming-of-age'>Coming-of-age</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Epic'>Epic</option>
                <option value='Mythology'>Mythology</option>
            </Select>
            <Text display={categoryValid ? "none" : "block"} color="#FC8181">Required</Text>

            <Input placeholder='Published year' borderWidth="3px" borderColor={publishedYearValid ? "#CBD5E0" : "#FC8181"} maxW="30rem" mt="10px" value={publishedYear} onChange={(e) => setPublishedYear(e.target.value)} onFocus={() => setPublishedYearValid(true)}/>
            <Text display={publishedYearValid ? "none" : "block"} color="#FC8181">Required</Text>

            <Textarea placeholder='Discripton' borderWidth="3px" borderColor={discriptionValid ? "#CBD5E0" : "#FC8181"} maxW="30rem" mt="10px" value={discription} onChange={(e) => setDiscription(e.target.value)} onFocus={() => setDiscriptionValid(true)}/>
            <Text display={discriptionValid ? "none" : "block"} color="#FC8181">Required</Text>
            {/* <Input placeholder='Image link' borderWidth="3px" borderColor="#CBD5E0" maxW="30rem" mt="10px" value={imageLink} onChange={() => setImageLink(e.target.value)}/> */}
            <Button bg="#CBD5E0" w="12rem" color="#4A5568" mt="10px" onClick={HandleOnClick}>Add</Button>
        </Flex>
    )
}