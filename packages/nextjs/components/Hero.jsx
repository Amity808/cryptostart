import React from "react";

const Hero = () => {
  const headerStyle = {
    backgroundImage: `url('/H.png')`,
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
    <div style={headerStyle} className=" h-[700px]  flex justify-center  items-center text-center  flex-col">
      <div className="">
        <h2 className=" text-3xl font-semibold capitalize flex justify-center items-center">
          We make cross border payment, gifting <br /> clear and simple
        </h2>
        <button className=" text-xl font-normal mt-12 bg-[#0b0711] py-3 px-4 rounded-md">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
