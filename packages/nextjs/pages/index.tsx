"use client";

// import Link from "next/link";
import type { NextPage } from "next";
// import { useAccount } from "wagmi";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { Address } from "~~/components/scaffold-eth";
import Hero from "../components/Hero"
import Service from "../components/Service"
import Show from "../components/Show"
import Step from "../components/Step"

const Home: NextPage = () => {
  // const { address: connectedAddress } = useAccount();

  return (
    <>
      <div>
        <Hero />
        <Show />
        <Service />
        <Step />
        
      </div>
    </>
  );
};

export default Home;
