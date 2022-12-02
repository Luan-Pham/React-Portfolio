import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useState } from 'react';

function Contact() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === '';

  return (
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
  );
}

export default Contact;
