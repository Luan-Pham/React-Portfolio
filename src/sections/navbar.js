import { Tabs, TabList, Tab } from '@chakra-ui/react';

function Navbar() {
  return (
    <Tabs defaultIndex={1}>
      <TabList>
        <Tab>Naruto</Tab>
        <Tab>Sasuke</Tab>
      </TabList>
    </Tabs>
  );
}

export default Navbar;
