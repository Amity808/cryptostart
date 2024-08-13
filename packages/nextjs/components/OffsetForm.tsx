import React, { useState} from 'react'
// import { useScaffoldWriteContract } from '~~/hooks/scaffold-eth'
import { useAccount } from "wagmi";
import { ethers } from "ethers";
import Abi from "~~/contracts/abi.json"
import { createNewPol, handleUpdateMembers } from "~~/distributionpool"


const OffsetForm = () => {
    const [loading, setloading] = useState(false)
    const [memberAddress, setMemberAddress] = useState("")
    const { address } = useAccount()
    const config = {
        transferabilityForUnitsOwner: true,
        distributionFromAnyAddress: false,
    };
    const token = "0x671425ae1f272bc6f79bec3ed5c4b00e9c628240";

    // const { writeContractAsync } = useScaffoldWriteContract("GDAv1Forwarder")
    let provider: any;
    if (typeof window !== 'undefined' && window.ethereum) {
        provider = new ethers.providers.Web3Provider(window?.ethereum, "any")
    }


    // const createNewPol = async () => {
    //     setloading(true)
    //     try {
    //         const signer = await provider?.getSigner();
    //         const contract = new ethers.Contract(Abi.address, Abi.abi, signer)

    //         const tx = await contract.createPool(token, address, config);
    //         const receipt = await tx.wait();
    //         console.log(receipt)
    //         return receipt.events.find((event: any) => event.event === "PoolCreated").args
    //             .pool;
    //             setloading(false)
    //     } catch (error) {
    //         setloading(false)
    //         console.log(error)

    //     }
    // }

    


    
    
    console.log(loading)
    return (
        <div>
            <button onClick={createNewPol}>Create pool</button>
        </div>
    )
}

export default OffsetForm