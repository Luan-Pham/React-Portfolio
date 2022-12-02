import { List, ListItem, ListIcon } from '@chakra-ui/react';

function Resume() {
  const frontEnd = [
    'HTML',
    'CSS',
    'Javascript',
    'jQuery',
    'Bootstrap',
    'React',
  ];

  const backEnd = ['Node.js', 'Express', 'SQL', 'MongoDB'];

  return (
    <>
      <List spacing={3}>
        {frontEnd.map((skill) => (
          <ListItem key={skill}>{skill} </ListItem>
        ))}
      </List>
      <List spacing={3}>
        {backEnd.map((skill) => (
          <ListItem key={skill}>{skill} </ListItem>
        ))}
      </List>
    </>
  );
}
export default Resume;
