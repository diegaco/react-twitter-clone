import { Icon, IconProps, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import {} from '@chakra-ui/color-mode';

const Logo: React.FC = props => {
  const { toggleColorMode } = useColorMode();
  const logoColor = useColorModeValue('primary.500', undefined);

  return (
    <Button onClick={toggleColorMode} variant="unstyled">
      <Icon color={logoColor} as={FaTwitter} w={7} h={7} {...props}/>
    </Button>
  );
}

export default Logo

