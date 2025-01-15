"use client";
import Heading from "@/components/Heading";
import Link from "next/link";
import Card from "@/components/Card";
import Modal from "@/components/Modal";
import { useState } from "react";

export default function Portfolio() {
  const [name, setName] = useState("");
  return (
    <div className=" w-full flex flex-col items-center lg:px-36 md:px-9 sm:px-5 px-5 lg:mt-40 md:mt-24 sm:mt-16 mt-10">
      {/* About me */}

      <Heading heading="Portfolio" />
      <div className="flex flex-row ">
        <Link
          href={"/"}
          className="text-gray-500 hover:text-cyan-700 ease-in-out duration-300 text-sm cursor-pointer"
        >
          Home
        </Link>
        <div className="text-sm mx-2">/</div>
        <Link
          href={"/portfolio"}
          className="text-gray-500 hover:text-cyan-700 ease-in-out duration-300 text-sm cursor-pointer"
        >
          Portfolio
        </Link>
      </div>

      <div className="h-72" />

      <div className="mb-40 w-4/5 px-5">
        <div className="underline decoration-4 underline-offset-4 decoration-[#F97300] text-xl">
          Major Projects
        </div>

        <Modal target={name} />

        <div className="grid grid-cols-3 mt-10 gap-2">
          <div onClick={() => setName("one")}>
            <Card heading="Vocab Native App" target="one" />
          </div>
          <div onClick={() => setName("four")}>
            <Card heading="Google lens clone" target="one" />
          </div>
        </div>
        <div className="underline decoration-4 underline-offset-4 decoration-[#F97300] text-xl mt-20">
          Minor Projects
        </div>
        <div className="grid grid-cols-3 mt-10 gap-2">
          <div onClick={() => setName("two")}>
            <Card heading="Search Agent Chatbot" target="one" />
          </div>
          <div onClick={() => setName("three")}>
            <Card heading="Twitter Bot" target="one" />
          </div>
        </div>
      </div>
    </div>
  );
}
