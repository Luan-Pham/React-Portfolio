import Portfolio from './sections/portfolio';
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './sections/navbar';
import { useState } from 'react';
import Project from './sections/project';
import Contact from './sections/contact';
import About from './sections/about';

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
