import { Container, Box, HStack, Stack, VStack, Link, Icon, Image, Text, Button } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode';
import { NavLink as ReachLink, useLocation } from 'react-router-dom';
import { FaTwitter } from 'react-icons/fa';
import {
  BsBell,
  BsBellFill,
  BsBookmarks,
  BsBookmarksFill,
  BsEnvelope,
  BsEnvelopeFill,
  BsHash,
  BsHouse,
  BsHouseFill,
  BsList,
  BsPerson,
  BsPersonFill,
  BsThreeDots,
} from "react-icons/bs";
import { IconType } from 'react-icons';

interface ListLink {
  href: string,
  text: string,
  icon: IconType,
  activeIcon: IconType
};

const LINKS: ListLink[] = [
  {
    href: '/home',
    text: 'Inicio',
    icon: BsHouse,
    activeIcon: BsHouseFill
  },
  {
    href: '/explore',
    text: 'Explorar',
    icon: BsHash,
    activeIcon: BsHash
  },
  {
    href: '/notifications',
    text: 'Notificaciones',
    icon: BsBell,
    activeIcon: BsBellFill
  },
  {
    href: '/messages',
    text: 'Mensajes',
    icon: BsEnvelope,
    activeIcon: BsEnvelopeFill
  },
  {
    href: '/bookmark',
    text: 'Guardados',
    icon: BsBookmarks,
    activeIcon: BsBookmarksFill
  },
  {
    href: '/lists',
    text: 'Listas',
    icon: BsList,
    activeIcon: BsList
  },
  {
    href: '/profile',
    text: 'Perfil',
    icon: BsPerson,
    activeIcon: BsPersonFill
  },
  {
    href: '/options',
    text: 'Mas Opciones',
    icon: BsThreeDots,
    activeIcon: BsThreeDots
  }
]

const Layout: React.FC = ({ children }) => {
  const { toggleColorMode } = useColorMode();
  const { pathname } = useLocation();
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
          alignItems="initial"
          justifyContent="space-between"
          flexBasis="275px"
          spacing="8"
          pt={4}
          px={3}
          borderRightWidth="1px"
        >
          <VStack alignItems="initial" spacing={6}>
            <Box>
              <Button onClick={toggleColorMode} variant="unstyled">
                <Icon color={logoColor} as={FaTwitter} w={7} h={7} />
              </Button>
            </Box>
            <VStack as="nav" spacing={6} alignItems="flex-start" w="full">
              {LINKS.map((link) => (
                <Link
                  as={ReachLink}
                  to={link.href}
                  color={pathname === link.href ? "primary.500" : "inherit"}
                >
                  <HStack spacing={4} alignItems="center">
                    <Icon
                      as={pathname === link.href ? link.activeIcon : link.icon}
                      w={6}
                      h={6}
                    />
                    <Text fontWeight="bold" fontSize="lg">
                      {link.text}
                    </Text>
                  </HStack>
                </Link>
              ))}
              <Button w="90%" colorScheme="primary" size="lg">
                Twittear
              </Button>
            </VStack>
          </VStack>
          <HStack
            py={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack>
              <Image
                boxSize="40px"
                borderRadius="full"
                objectFit="cover"
                src="https://pbs.twimg.com/profile_images/1207638042049236992/9q7TmUVS_x96.jpg"
                alt="Diego Acosta"
              />
              <VStack alignItems="start" spacing={0}>
                <Text fontWeight="bold">Diego Acosta</Text>
                <Text fontSize="sm" color="gray.500">@diegoacosta211</Text>
              </VStack>
            </HStack>
            <Icon as={BsThreeDots} w={6} h={6} />
          </HStack>
        </VStack>
        <Box as="main">{children}</Box>
      </HStack>
    </Container>
  ); };

export default Layout;
