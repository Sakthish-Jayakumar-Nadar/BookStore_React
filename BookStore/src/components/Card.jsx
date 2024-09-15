import { Box, Link, Image, Heading } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom'

export default function Card({id, src, title}){
    return (
        <Link as={RouterLink} to={"/book/"+id} _hover={{ textDecor: 'none' }}>
			<Box maxW='sm' borderRadius='lg' bgColor='white' _hover={{ shadow: 'lg' }}>
				<Image src={src} w='full' h='350px' objectFit='cover'/>
				<Box py='5' px='4'>
                    <Heading as='h4' fontSize='lg' mb='3'color="#718096" textAlign='center'> {title}</Heading>
				</Box>
			</Box>
		</Link>
    )
}