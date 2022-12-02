import {
  Center,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  useToast,
  Button,
} from '@chakra-ui/react';

import { useState } from 'react';

function Contact() {
  const [input, setInput] = useState('');

  const toast = useToast();

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
    <Center>
      <FormControl isRequired margin='200'>
        <FormLabel>name</FormLabel>
        <Input placeholder='Please Enter your name name' />
        <FormLabel>Email</FormLabel>
        <Input
          isInvalid={isError}
          type='email'
          placeholder='Please your email'
          value={input}
          onChange={handleInputChange}
        />
        {!isError ? (
          <FormHelperText></FormHelperText>
        ) : (
          <FormErrorMessage>Please enter a valid email.</FormErrorMessage>
        )}
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder='Please enter your message!'
          width='100%'
          height='300px'
        />
        <Button
          marginTop='5'
          size='lg'
          type='submit'
          onClick={() =>
            toast({
              title: 'Message submited',
              description: 'Your message has been submitted',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Show Toast
        </Button>
      </FormControl>
    </Center>
  );
}

export default Contact;
