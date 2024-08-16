import React from "react";
import GiftNft from "../components/GiftNft";

const NFT = () => {
  return (
    <div className="  text-white ">
      {/* <p>Gift</p> */}
      <div className=" h-[600px] max-sm:h-[400px]  px-24 py-6">
        <div className=" flex justify-center items-center">
          <GiftNft />
        </div>
      </div>
    </div>
  );
};

export default NFT;
