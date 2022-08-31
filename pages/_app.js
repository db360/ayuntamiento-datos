import Layout from '../components/Layout'
import '../styles/globals.css'

import { DataProvider } from '../context/dataContext'

function MyApp({ Component, pageProps }) {


  return (
  <DataProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </DataProvider>
  )
}

export default MyApp
