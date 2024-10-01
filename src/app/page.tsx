"use client";
import Heading from "@/components/Heading";
import TypewriterText from "@/components/TypewriterText";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col  justify-center items-center lg:px-32 md:px-9 sm:px-5 px-5">
      <Heading heading="Anshul Sharma" />
      <div className="h-12 flex justify-center items-center relative bottom-10">
        <TypewriterText />
      </div>
      <div className="text-center text-sm relative bottom-10">
        I’m a web/mobile application developer with the expertise in Frameworks
        / Programming Languages React + NodeJS + React Native + Firebase +
        WebRTC + Docker + MongoDB + Postgres etc.
      </div>
    </div>
  );
}
