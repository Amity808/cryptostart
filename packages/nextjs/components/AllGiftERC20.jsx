import React from "react";
import GiftCard from "./GiftCard";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";


const AllGiftERC20 = () => {
  const { data, isLoading } = useScaffoldReadContract({
    contractName: "StartPay",
    functionName: "giftLen",
    // args: [address, id]
  });

  const giftLenght = data? Number(data.toString()) : 0;
  const getGiftLength = () => {
    // if there is no waste recorded, return null 
    if(!giftLenght) return null;
    const gifts = [];
    // looping through the data
    for (let i = 0; i < giftLenght; i++) {
      gifts.push(
        <Product 
          key={i}
          id={i}
          />
          )
    }
    return gifts;
  }


  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Recipient Name</th>
              <th>Recipient Add</th>
              <th>Generated Link</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {getGiftLength()}
            {/* row 2 */}
            
            {/* row 3 */}
          </tbody>
          {/* <GiftCard  /> */}
        </table>
      </div>
    </div>
  );
};

export default AllGiftERC20;
