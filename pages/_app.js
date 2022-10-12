import '../styles/globals.css'
import '../styles/Home.module.css'
import '../styles/styles.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer';



function MyApp({ Component, pageProps }) {
  return (
    <div className='_app'>    
     
    
      <Head>
        <title>Blog</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
              crossOrigin="anonymous" />
      </Head>
      <div className="container">
       
       <Nav />
       
        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>

      
      
    </div>
  )
} 

export default MyApp;