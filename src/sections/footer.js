import { Center, Divider, Link } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineLinkedin } from 'react-icons/ai';
function Footer() {
  return (
    <Center
      position='fixed'
      bottom='0px'
      width='100vw'
      bg='#007090'
      height='13vh'
      color='white'
      justifyContent='space-evenly'
    >
      <Link href='https://secure-everglades-09731.herokuapp.com/' isExternal>
        <AiOutlineLinkedin size={100} />
      </Link>
      <Divider orientation='vertical' />
      <Link href='https://secure-everglades-09731.herokuapp.com/' isExternal>
        <FaGithub size={100} />
      </Link>
    </Center>
  );
}

export default Footer;
