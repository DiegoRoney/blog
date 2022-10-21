import "../styles/globals.css";
import "../styles/Home.module.css";
import "../styles/styles.css";
import Head from "next/head";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
  return (
    <div className="_app">
      <Head>
        <title>Blog</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="container">
        <Nav />
        <Menu />
        <main>
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
