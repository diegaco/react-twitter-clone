import { Container, Box, HStack, Stack } from '@chakra-ui/react'

import Logo from './components/Logo';
import Navbar from './components/Navbar';
import ProfileButton from './components/ProfileButton';
import Routes from './components/Routes';

const App: React.FC = () => {
  return (
    <Container
      maxW="container.xl"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <HStack spacing="0" alignItems="initial" flex="1 0 100%">
        <Stack
          as="header"
          maxHeight="100vh"
          position="sticky"
          top="0"
          flexBasis="275px"
          spacing="8"
          py={3}
          px={3}
          borderRightWidth="1px"
        >
          <Stack justifyContent="space-between" height="100%">
            <Stack alignItems="initial" spacing={6}>
              <Box>
                <Logo />
              </Box>
              <Navbar />
            </Stack>
            <ProfileButton />
          </Stack>
        </Stack>
        <Box flexBasis="600px" as="main" borderRightWidth="1px">
          <Routes />
        </Box>
      </HStack>
    </Container>
  );
}

export default App
