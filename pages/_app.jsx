import "../styles/globals.css";
import CoinProvider from "../components/CoinContext/CoinProvider";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Navbar, Footer } from "../components";
export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <CoinProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </CoinProvider>
    </UserProvider>
  );
}
