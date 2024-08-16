"use client";

import React, { useState } from "react";
import { publicClient, walletClient } from "../helper/wagmiconfig";
import { useScaffoldWriteContract } from "../hooks/scaffold-eth";
import SendGiftMail from "./email/SendGiftMail";
import CustomInput from "./ui/CustomInput";
import { render } from "@react-email/components";
import { peanut } from "@squirrel-labs/peanut-sdk";
import { ethers } from "ethers";
import { getGeneralPaymasterInput } from "viem/zksync";
// import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import StartPay from "~~/contracts/startpay.json";
import useLoading from "~~/hooks/useLoading";

const GiftForm = () => {
  const { isLoading: isLoadGift, startLoading: startLoadPGift, stopLoading: stopLoadPGift } = useLoading();
  const [amount, setAmount] = useState("");

  const { address } = useAccount();
  const [link, setLink] = useState("");
  const [txStatus, setTxStatus] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const [recipentName, setRecipentName] = useState("");
  const [subjectLine, setSubjectLine] = useState("");
  // const [tokenType, setTokenType] = useState(0);
  // const [tokenAddress, setTokenAddress] = useState("");

  //  push
  const paymasterAddress = "0x7afF0B53fe17231195968869c39B1D33599eDaB1";
  const { writeContractAsync } = useScaffoldWriteContract("StartPay");
  const createPyament = async () => {
    if (!window.ethereum) {
      throw new Error("MetaMask is not installed");
    }

    // Request account access if needed
    await window.ethereum.request({ method: "eth_requestAccounts" });
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      const signer = await provider.getSigner();
      if (!signer) throw new Error("Connect your wallet");
      const network = await signer.provider.getNetwork();
      const chainId = network.chainId;
      console.log(chainId);
      const { link, txHash } = await peanut.createLink({
        structSigner: {
          signer: signer,
        },
        linkDetails: {
          chainId,
          tokenAmount: amount,
          tokenDecimals: 18,
          tokenType: 0,
        },
      });
      setLink(link);
      setTxStatus(txHash);
      console.log(link);
      return link;
    } catch (error) {
      console.log(error);
    }
  };

  // const params = utils.getPaymasterParams(
  //   paymaster,
  //   {
  //     type: "General",
  //     innerInput: new Uint8Array()
  //   }
  // )

  const sendEmail = async linkz => {
    const emailHtml = render(<SendGiftMail userFirstname={recipentName} address={address} link={linkz} />);
    try {
      const response = await fetch("/api/send/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "codestorm808@gmail.com",
          reciever: email,
          subject: subjectLine,
          message: emailHtml,
        }),
      });
      console.log(response);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlewrite = async () => {
    const [account] =
      typeof window !== "undefined" && window.ethereum
        ? await window.ethereum.request({ method: "eth_requestAccounts" }) // Request accounts if in a browser with Ethereum provider
        : [];

    if (!account) {
      throw new Error("No account found. Please connect your wallet."); // Throw an error if no account is found
    }

    const request = publicClient?.simulateContract(walletClient, {
      address: StartPay.address,
      abi: StartPay.abi,
      functionName: "giftUser",
      args: [address, link, content],
      account,
      paymaster: paymasterAddress,
      paymasterInput: getGeneralPaymasterInput({ innerInput: new Uint8Array() }),
    });
    try {
      // await writeContractAsync({
      //     functionName: "giftUser",
      //     args: [address, link, content],
      // })

      if (request) {
        const response = await walletClient?.writeContract({
          // ...request,
          address: StartPay.address,
          abi: StartPay.abi,
          functionName: "giftUser",
          args: [address, link, content],
          account,
          paymaster: paymasterAddress,
          paymasterInput: getGeneralPaymasterInput({ innerInput: new Uint8Array() }),
        });

        console.log(response, "response");
      } else {
        throw new Error("Request object is undefined");
      }
    } catch (error) {
      console.error(error, "error writing");
    }
  };
  console.log(isLoadGift, "loading");

  const perfromGift = async e => {
    e.preventDefault();
    startLoadPGift();
    try {
      const link = await createPyament();
      console.log(link);
      if (link) {
        await sendEmail(link);
        await handlewrite();
      }
      stopLoadPGift();
    } catch (error) {
      stopLoadPGift();
    }
  };

  return (
    <div>
      <form onSubmit={perfromGift} className="  flex gap-3 flex-col justify-center items-center mt-6">
        <p className=" text-xl font-semibold">Start payment</p>
        <CustomInput
          className={"w-[500px] "}
          onChange={e => setRecipentName(e.target.value)}
          placeholder={"Recipent Name"}
        />
        <CustomInput
          className={" w-[500px]"}
          onChange={e => setEmail(e.target.value)}
          placeholder={"Reciepent Email"}
        />
        <CustomInput
          className={" w-[500px]"}
          onChange={e => setSubjectLine(e.target.value)}
          placeholder={"Email Subject Line"}
        />
        <CustomInput className={" w-[500px]"} onChange={e => setAmount(e.target.value)} placeholder={"amount"} />
        <CustomInput
          className={" w-[500px]"}
          onChange={e => setContent(e.target.value)}
          placeholder={"Email content"}
        />
        <button className=" rounded-md bg-purple-800 py-3 px-2">Send payment</button>
      </form>
      {/* <button onClick={sendEmail}>pay</button> */}
      <p>{txStatus}</p>
    </div>
  );
};

export default GiftForm;
