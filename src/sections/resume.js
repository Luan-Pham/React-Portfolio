import {
  List,
  ListItem,
  Center,
  Flex,
  Grid,
  GridItem,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Resume() {
  const frontEnd = ['HTML', 'CSS', 'Javascript', 'jQuery', 'React'];

  const backEnd = ['Node.js', 'Express', 'SQL', 'MongoDB', 'graphQL'];

  return (
    <Grid
      width='100vw'
      margin='50'
      padding='50'
      h='80vh'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(4, 1fr)'
      gap={2}
      fontSize='3xl'
      color='white'
    >
      <GridItem
        rowSpan={1}
        colSpan={4}
        bg='#A3BAC3'
        position='relative'
        textAlign='center'
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%'>
          <Link href='https://my.indeed.com/p/luanp-qfoipza' isExternal>
            Click here to check out my resume! <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem
        colSpan={2}
        bg='#006989'
        position='relative'
        textAlign='center'
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%' padding='20'>
          <List spacing={2}>
            <ListItem fontSize='6xl'>Front End Skills</ListItem>
            {frontEnd.map((skill) => (
              <ListItem key={skill}>{skill} </ListItem>
            ))}
          </List>
        </Center>
      </GridItem>
      <GridItem
        colSpan={2}
        bg='#006989'
        position='relative'
        textAlign='center'
        bgPosition='center'
        bgSize='cover'
      >
        <Center width='100%' height='100%' padding='20'>
          <List spacing={2}>
            <ListItem fontSize='6xl'>Back End Skills</ListItem>
            {backEnd.map((skill) => (
              <ListItem key={skill}>{skill} </ListItem>
            ))}
          </List>
        </Center>
      </GridItem>
    </Grid>
  );
}
export default Resume;
