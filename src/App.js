import { ChakraProvider, Box } from '@chakra-ui/react';
import Navbar from './sections/Navbar';
import { useState } from 'react';
import Project from './sections/Projects';
import Contact from './sections/Contact';
import About from './sections/About';
import Resume from './sections/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Project') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider>
      <Box height='100vh' width='100vw' justifyContent='center'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </Box>
    </ChakraProvider>
  );
}

export default App;
