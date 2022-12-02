import { Tabs, TabList, Tab } from '@chakra-ui/react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <Tabs
      isFitted
      align='center'
      defaultIndex={1}
      size='lg'
      variant='soft-rounded'
      colorScheme='linkedin'
    >
      <TabList height='5vh'>
        <Tab onClick={() => handlePageChange('About')}>Home</Tab>
        <Tab onClick={() => handlePageChange('Project')}>Projects</Tab>
        <Tab onClick={() => handlePageChange('Contact')}>Contact</Tab>
        <Tab onClick={() => handlePageChange('Resume')}>Resume</Tab>
      </TabList>
    </Tabs>
  );
}

export default Navbar;
