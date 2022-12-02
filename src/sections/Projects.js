import { Center, Grid, GridItem, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

function Project() {
  return (
    <Grid
      margin='50'
      padding='50'
      h='80vh'
      templateRows='repeat(3, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={2}
      fontSize='5xl'
    >
      <GridItem rowSpan={3} colSpan={1} bg='#A3BAC3'>
        <Center width='100%' height='100%'></Center>
      </GridItem>
      <GridItem colSpan={2} bg='#006989' position='relative' textAlign='center'>
        <Center width='100%' height='100%'>
          <Link
            href='https://luan-pham.github.io/Password-Generator/'
            isExternal
          >
            Password Generator! <ExternalLinkIcon mx='2px' />
          </Link>
        </Center>
      </GridItem>
      <GridItem colSpan={2} bg='#006989'>
        <Center width='100%' height='100%'></Center>
      </GridItem>
      <GridItem colSpan={4} bg='#01A7C2'>
        <Center width='100%' height='100%'></Center>
      </GridItem>
      <GridItem colSpan={2} bg='#006989'>
        <Center width='100%' height='100%'></Center>
      </GridItem>
      <GridItem colSpan={2} bg='#006989'>
        <Center width='100%' height='100%'></Center>
      </GridItem>
    </Grid>
  );
}

export default Project;
