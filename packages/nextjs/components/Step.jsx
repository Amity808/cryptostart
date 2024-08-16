import React from "react";
import Image from "next/image";

const Service = () => {
  // const headerStyle = {
  //     backgroundImage: `url('/bag1.png')`,
  //     /* Additional styles can be added here */

  //     // Set background size to cover the container by default
  //     backgroundSize: "cover",

  //     // Center the background image by default
  //     backgroundPosition: "center",

  //     // Media query for mobile devices
  //     "@media (maxWidth: 768px)": {
  //       backgroundSize: "auto", // Adjust background size for smaller screens
  //       backgroundPosition: "center", // You can adjust this as needed
  //     },
  //   };
  return (
    <div className="h-[700px] ">
      <div className=" flex flex-row mt-[30px] justify-evenly items-center lg:flex-row max-lg:flex-row md:flex-row max-md:flex-row sm:flex-col max-sm:flex-col">
        <div>
          <h4 className=" font-medium text-3xl text-white">
            Take your first step into safe, <br /> secure crossborder payment
          </h4>
          <button className=" text-white border-2 border-solid py-2 px-4 rounded-lg">Get Start</button>
        </div>
        <div>
          <Image src={"/bag.png"} width={100} height={100} alt="coin" />
        </div>
      </div>
    </div>
  );
};

export default Service;
