import { HStack, VStack, Link, Text, Button, Icon } from '@chakra-ui/react'
import { NavLink as ReachLink, useLocation } from 'react-router-dom';
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

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <VStack as="nav" spacing={6} alignItems="flex-start" w="full">
      {LINKS.map((link, i) => (
        <Link
          key={i}
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
  );
}

export default Navbar
