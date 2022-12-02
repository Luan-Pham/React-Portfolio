import {
  Stack,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  Heading,
} from '@chakra-ui/react';
import headshot from '../assets/headshot.jpeg';

function About() {
  return (
    <Stack direction={['column', 'row']} spacing='24px'>
      <Image
        borderRadius='full'
        boxSize='500px'
        src={headshot}
        alt='Luan Pham'
      />
      <Card>
        <CardHeader>
          <Heading size='lg'>About Me</Heading>
        </CardHeader>
        <CardBody>
          <Text fontSize='3xl'>
            My name is Luan Pham and I am an aspiring web developer. I graduated
            from UC Davis in 2016 with a degree in Exercise Biology. Afterwards,
            I studied physical therapy and have been working in the field ever
            since. I have always been interested in programming and want to
            change to a career that will help my professional and personal
            growth. I decided to attend the UC Berkeley Coding Camp which helped
            me learn valuable web development skills. I am interested in video
            games, sports, film, and deep diving into the lore of fictional
            worlds.
          </Text>
        </CardBody>
      </Card>
    </Stack>
  );
}

export default About;
