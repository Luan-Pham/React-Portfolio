import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './sections/Navbar';
import { useState } from 'react';
import Project from './sections/Projects';
import Contact from './sections/Contact';
import About from './sections/About';

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
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ChakraProvider>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </ChakraProvider>
  );
}

export default App;
