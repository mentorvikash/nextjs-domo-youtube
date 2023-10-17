import '@/styles/globals.css'
import Layout from '@/components/layout'
// config bootstrap in our project
import "bootstrap/dist/css/bootstrap.min.css"
import { ThemeProvider } from 'styled-components'
import Header from './comment/layout/header'
import Footer from './comment/layout/footer'

const theme = {
  colors: {
    primary: "red",
  }
}

export default function App({ Component, pageProps }) {

  // by using this method we can create special layout for each page
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <ThemeProvider theme={theme} >
      <Header />
      <Layout><Component {...pageProps} /></Layout>
      <Footer />
    </ThemeProvider>
  )
<<<<<<< Updated upstream
  return <Component {...pageProps} />
=======

  // by using this method we can create special layout for each page
  // if (Component.getLayout) {
  //   return Component.getLayout(<Component {...pageProps} />)
  // }

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <ThemeProvider theme={theme} >
      <Header />
      <Layout><Component {...pageProps} /></Layout>
      <Footer />
    </ThemeProvider>
  )
>>>>>>> Stashed changes
}
