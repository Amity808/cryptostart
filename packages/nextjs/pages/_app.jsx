import ScaffoldEthApp from "~~/components/layout";
import "~~/styles/globals.css";
function App({ Component, pageProps }) {
  return (
    <>
    <ScaffoldEthApp>
      <Component {...pageProps} />
    </ScaffoldEthApp>
    </>
  );
}

export default App;
