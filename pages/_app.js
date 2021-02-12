import Layout from "../components/Layout";
import CartWraper from "../context/CartWrapper";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CartWraper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartWraper>
  );
}

export default MyApp;
