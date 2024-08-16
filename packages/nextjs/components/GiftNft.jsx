import React, { useState } from "react";
import SendGiftMail from "./email/SendGiftMail";
import CustomInput from "./ui/CustomInput";
import { render } from "@react-email/components";
import { peanut } from "@squirrel-labs/peanut-sdk";
import { ethers } from "ethers";
import { getGeneralPaymasterInput } from "viem/zksync";
import { useAccount } from "wagmi";
import StartPay from "~~/contracts/startpay.json";
import { walletClient } from "~~/helper/wagmiconfig";
import useLoading from "~~/hooks/useLoading";

const GiftNft = () => {
  const [NFTTokenId, setNFTTokenId] = useState("");
  const [nftAddress, setNftAddress] = useState("");
  const { isLoading: isLoadGift, startLoading: startLoadPGift, stopLoading: stopLoadPGift } = useLoading();

  const [link, setLink] = useState("");
  const [content, setContent] = useState("");
  const [email, setEmail] = useState("");
  const paymasterAddress = "0x7afF0B53fe17231195968869c39B1D33599eDaB1";
  const { address } = useAccount();

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

      const linkDetails = {
        chainId: chainId,
        tokenAddress: [nftAddress],
        tokenAmount: 1,
        tokenType: 2,
        tokenId: [NFTTokenId],
      };

      const password = await peanut.getRandomString(16);
      const preparedTransactions = await peanut.prepareDepositTxs({
        address: address,
        linkDetails,
        passwords: [password],
      });

      const transactionHashes = [];

      for (const unsignedTx of preparedTransactions.unsignedTxs) {
        const convertedTx = peanut.peanutToEthersV5Tx(unsignedTx);

        const signedTx = await wallet.sendTransaction(convertedTx);

        transactionHashes.push(signedTx.hash);
      }

      const { link } = await peanut.getLinksFromTx({
        linkDetails,
        passwords: [password],
        txHash: transactionHashes[transactionHashes.length - 1],
      });
      setLink(link);
      setTxStatus(txHash);
      console.log(link);
      return link[0];
    } catch (error) {
      console.log(error);
    }
  };
  // sending email
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

    try {
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

  const sendNft = async e => {
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
      <form onSubmit={sendNft} className="  flex gap-3 flex-col justify-center items-center mt-6">
        <p className=" text-xl font-semibold">Start Nft</p>
        <CustomInput
          className={"w-[700px] "}
          onChange={e => setRecipentName(e.target.value)}
          placeholder={"Recipent Name"}
        />
        <CustomInput
          className={" w-[700px]"}
          onChange={e => setEmail(e.target.value)}
          placeholder={"Reciepent Email"}
        />
        <CustomInput
          className={" w-[700px]"}
          onChange={e => setNftAddress(e.target.value)}
          placeholder={"NFT address"}
        />
        <CustomInput
          className={" w-[700px]"}
          onChange={e => setSubjectLine(e.target.value)}
          placeholder={"NFT Email Subject Line"}
        />
        <CustomInput
          className={" w-[500px]"}
          onChange={e => setNFTTokenId(e.target.value)}
          placeholder={"NFT Token ID"}
        />
        <CustomInput
          className={" w-[700px]"}
          onChange={e => setContent(e.target.value)}
          placeholder={"Email content"}
        />
        <button className=" rounded-md bg-purple-800 py-3 px-2" disabled={isLoadGift}>
          Send NFT
        </button>
      </form>
    </div>
  );
};

export default GiftNft;
