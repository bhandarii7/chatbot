import React from 'react';
import { Flex, Spacer,Heading,Button,Box,Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

export default function Header() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef();
  return(
    <div>
    <Flex px='4' py='2' >
  <Box p='2'>
     <Link to='/' >
     <Heading size='md'>Blog site</Heading>
     </Link> 
  </Box>
  <Spacer />
  <Box>
     <Link to='/login' >
    <Button variant={'ghost'} mr='4' colorScheme='teal'>Log in</Button>
     </Link>
     <Link to='/signup' >
      <Button colorScheme='teal' >Sign Up</Button>
     </Link>
  </Box>
</Flex>

<Modal
  initialFocusRef={initialRef}
  isOpen={isOpen}
  onClose={onClose}
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Create your account</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
      
    </ModalBody>
    <ModalFooter>
      <Button colorScheme='blue' mr={3}>
        sign Up
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
</div>
)};