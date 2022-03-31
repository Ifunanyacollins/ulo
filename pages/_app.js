import { AuthProvider } from "../context/authProvider";
import "../styles/globals.css";
import "@fontsource/nunito-sans/300.css";
import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/700.css";
import Navbar from "../components/layout/Navbar";
require("../styles/variables.less");
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
