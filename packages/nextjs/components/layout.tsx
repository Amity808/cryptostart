import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";


// export const metadata = getMetadata({
//   title: "Scaffold-ETH 2 App",
//   description: "Built with 🏗 Scaffold-ETH 2",
// });



const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
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
    // <html suppressHydrationWarning>
      <body className=" bg-black" style={headerStyle}>
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    // </html>
  );
};

export default ScaffoldEthApp;
