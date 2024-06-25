import '../styles/globals.css'
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../Components/Layout'));
function MyApp({ Component, pageProps }) {
  return (
    
      <Layout>
        <Component {...pageProps} />
      </Layout>
    
  )
}

export default MyApp