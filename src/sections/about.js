import {
  Flex,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Center,
} from '@chakra-ui/react';
import headshot from '../assets/Headshot.jpeg';

function About() {
  return (
    <Flex
      height='80vh'
      centerContent
      textAlign='center'
      display='flex'
      justifyContent='space-between'
    >
      <Box margin='50'>
        <Image
          borderRadius='50%'
          src={headshot}
          alt='Luan Pham'
          boxShadow='dark-lg'
        />
      </Box>

      <Card
        margin='50'
        bgColor='#01A7C2'
        textColor='#EAEBED'
        fontSize='3xl'
        variant='filled'
      >
        <CardHeader>
          <Heading size='lg' padding='50'>
            About Me
          </Heading>
        </CardHeader>
        <Center>
          <CardBody>
            <Text letterSpacing={2} overflowWrap='break-word'>
              My name is Luan Pham and I am an aspiring web developer. I
              graduated from UC Davis in 2016 with a degree in Exercise Biology.
              Afterwards, I studied physical therapy and have been working in
              the field ever since. I have always been interested in programming
              and want to change to a career that will help my professional and
              personal growth. I decided to attend the UC Berkeley Coding Camp
              which helped me learn valuable web development skills. I am
              interested in video games, sports, film, and deep diving into the
              lore of fictional worlds.
            </Text>
          </CardBody>
        </Center>
      </Card>
    </Flex>
  );
}

export default About;
