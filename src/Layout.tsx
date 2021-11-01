import { Container, Box, HStack, VStack, Link, Icon, StackDivider, Text, Button } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { Link as ReachLink } from 'react-router-dom';
import { FaTwitter, FaHashtag, FaEllipsisH } from 'react-icons/fa';
import { RiHome7Fill } from 'react-icons/ri';
import { BiEnvelope } from 'react-icons/bi';
import { VscBell } from 'react-icons/vsc';
import { FiBookmark } from 'react-icons/fi';
import { RiFileList2Line } from 'react-icons/ri';
import { HiOutlineUser } from 'react-icons/hi';

const Layout: React.FC = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue('primary.500', undefined);
  return (
    <Container
      maxW="container.xl"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <HStack spacing="4" alignItems="initial" flex="1 0 100%">
        <VStack
          as="header"
          flexBasis="275px"
          alignItems="flex-start"
          spacing="8"
          pt={4}
          borderRightWidth="1px"
          px={3}
        >
          <Box>
            <Button
              onClick={toggleColorMode}
              variant="unstyled"
            >
              <Icon color={logoColor} as={FaTwitter} w={7} h={7} />
            </Button>
          </Box>
          <VStack as="nav" spacing={6} alignItems="flex-start" w="full">
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={RiHome7Fill} w={6} h={6} />
                <Text fontWeight="bold" fontSize="lg">
                  Inicio
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={FaHashtag} w={6} h={6} />
                <Text fontWeight="bold" fontSize="lg">
                  Explorar
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={VscBell} w={6} h={6} />
                <Text fontWeight="700" fontSize="lg">
                  Notificaciones
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/messages">
              <HStack spacing={4} alignItems="center">
                <Icon as={BiEnvelope} w={6} h={6} />
                <Text fontWeight="700" fontSize="lg">
                  Mensajes
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={FiBookmark} w={6} h={6} />
                <Text fontWeight="700" fontSize="lg">
                  Guardados
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={RiFileList2Line} w={6} h={6} />
                <Text fontWeight="700" fontSize="lg">
                  Listas
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={HiOutlineUser} w={6} h={6} />
                <Text fontWeight="700" fontSize="lg">
                  Perfil
                </Text>
              </HStack>
            </Link>
            <Link as={ReachLink} to="/">
              <HStack spacing={4} alignItems="center">
                <Icon as={FaEllipsisH} w={6} h={6} />
                <Text fontWeight="700" fontSize="lg">
                  Mas Opciones
                </Text>
              </HStack>
            </Link>
            <Button w="90%" colorScheme="primary" size="lg">
              Twittear
            </Button>
          </VStack>
        </VStack>
        <Box as="main">{children}</Box>
      </HStack>
    </Container>
  ); };

export default Layout;
