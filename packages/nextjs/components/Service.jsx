import React from 'react'

const Service = () => {
    const headerStyle = {
        backgroundImage: `url('/bg-gradient.png')`,
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
    <div style={headerStyle} className='h-[700px] '>
      <div className='flex justify-center  items-center text-center  flex-col mt-[150px]'>
            <h2 className=' text-3xl font-semibold capitalize flex justify-center items-center'>Make Your CrossPayment easier</h2>
            <button className=' text-xl font-normal mt-12 bg-[#0b0711] py-3 px-4 rounded-md'>Get Started</button>
        </div>
        <div className=' flex flex-row mt-[100px] justify-around items-center lg:flex-row max-lg:flex-row md:flex-row max-md:flex-row sm:flex-col max-sm:flex-col'>
            <div>
                <img src={"/coin.png"} alt="coin" />
            </div>
            <div>
                <h4 className=' font-medium text-lg text-white'>24/7 access to full service customer support</h4>
                <button className=' text-white border-2 border-solid py-2 px-4 rounded-lg'>Get Start</button>
            </div>
        </div>
    </div>
  )
}

export default Service
