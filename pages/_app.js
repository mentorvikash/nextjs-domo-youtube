import '@/styles/globals.css'
import Layout from '@/components/layout'
// config bootstrap in our project
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: "red",
  }
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  )
}
