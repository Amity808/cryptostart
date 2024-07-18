import ScaffoldEthApp from "~~/components/layout";
import "~~/styles/globals.css";
function App({ Component, pageProps }) {
    const headerStyle = {
        backgroundImage: `url('/bg-dashboard.png')`,
        /* Additional styles can be added here */
    
        // Set background size to cover the container by default
        backgroundSize: "cover",
    
        // Center the background image by default
        backgroundPosition: "center",
    
        // Media query for mobile devices
        "@media (maxWidth: 768px)": {
          backgroundSize: "auto", // Adjust background size for smaller screens
          backgroundPosition: "center", // You can adjust this as needed
        },
      };
  return (
    <>
    <body className=" bg-black" style={headerStyle}>

    <ScaffoldEthApp>
      <Component {...pageProps} />
    </ScaffoldEthApp>
    </body>
    </>
  );
}

export default App;
