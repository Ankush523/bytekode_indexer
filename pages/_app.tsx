import '@/styles/globals.css'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'
import type { AppProps } from 'next/app'
const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  )
}
