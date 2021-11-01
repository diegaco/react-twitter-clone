import { extendTheme, theme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      'html, body, #root': {
        color: mode(undefined, '#d9d9d9')(props),
        height: '100%'
      },
    }),
  },
  fontSizes: {
    lg: "1.25rem",
  },
  colors: {
    primary: theme.colors.twitter,
  },
  sizes: {
    container: {
      xl: "1262px",
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 9999,
      },
      sizes: {
        lg: {
          height: '3.125rem',
          fontSize: '17px'
        }
      },
      variants: {
        solid: (props: any) => ({
          backgroundColor: `${props.colorScheme}.500`,
          color: mode(undefined, 'white')(props),
          fontWeight: 'bold',
          _hover: {
            backgroundColor: `${props.colorScheme}.600`
          }
        })
      }
    }
  }
})
