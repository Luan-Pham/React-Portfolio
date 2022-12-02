import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  useToast,
  Flex,
  Button,
} from '@chakra-ui/react';

import { useState } from 'react';

function Contact() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  const toast = useToast();
  return (
    <Flex height='80vh' width='50vw' centerContent margin='20'>
      <FormControl isInvalid={isError} isRequired>
        <FormLabel>name</FormLabel>
        <Input placeholder='Your Name' />
        <FormLabel>Email</FormLabel>
        <Input type='email' value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>Please enter your email!</FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
        <FormLabel>Message</FormLabel>
        <Input placeholder='Your message here' />
      </FormControl>
      <Button
        onClick={() =>
          toast({
            title: 'Message submitted!',
            description: 'Thank you!',
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </Flex>
  );
}

export default Contact;
