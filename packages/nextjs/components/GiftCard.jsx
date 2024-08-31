import React, { useState, useEffect, useCallback }  from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
 import { useAccount } from "wagmi"
const GiftCard = (id) => {

  const { address } = useAccount()

  const { data, isLoading } = useScaffoldReadContract({
    contractName: "StartPay",
    functionName: "_gifts",
    args: [address, id]
  });

  const [gifts, setGifts] = useState(null)
  // address owner;
  //       address payable gifter;
  //       string link;
  //       string content;

  const getFormatedGift = useCallback(() => {
    if(!data) return null
    setGifts({
      owner: data[0],
      gifter: [1],
      link: [2],
      content: [3]
    })
  }, [data])

  useEffect(() => {
    getFormatedGift()
  }, [getFormatedGift])

  return (
    <>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>{id}</th>
          <td>{gifts?.owner}</td>
          <td>{gifts?.content}</td>
          <td>{gifts?.link}</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>5</th>
          <td>Hart Hagerty 5</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        {/* row 3 */}
       
      </tbody>
    </>
  );
};

export default GiftCard;
