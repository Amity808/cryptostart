import React from 'react'
import GiftForm from "../components/GiftForm"



const Gift = () => {
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
    <div className='  text-white '>
        {/* <p>Gift</p> */}
        <div className=' h-[600px] max-sm:h-[400px]  px-24 py-6'>
            <div className=' flex justify-center items-center'>
                <GiftForm />
            </div>
        </div>
      
    </div>
  )
}

export default Gift
