import '@/styles/globals.css'
import Layout from '@/components/layout'
// config bootstrap in our project
import "bootstrap/dist/css/bootstrap.min.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout><Component {...pageProps} /></Layout>
    </>
  )
}
