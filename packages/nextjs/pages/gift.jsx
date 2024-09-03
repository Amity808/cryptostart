import React from "react";
import GiftForm from "../components/GiftForm";

const Gift = () => {
  return (
    <div className="  text-white ">
      
      <div className=" h-[600px] max-sm:h-[400px]  px-24 py-6">
        <div className=" flex justify-center items-center">
          <GiftForm />
        </div>
      </div>
    </div>
  );
};

export default Gift;
