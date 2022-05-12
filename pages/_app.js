import NavBar from "../components/layout/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    
    <div className="container text-base md:text-2xl mx-auto flex flex-col items-center">
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
