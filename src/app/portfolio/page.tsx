import Heading from "@/components/Heading";
import Link from "next/link";
import Card from "@/components/Card";

export default function Portfolio() {
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
        <div className="underline decoration-4 underline-offset-4 decoration-[#F97300] ">
          Projects
        </div>

        <div className="grid grid-cols-3 mt-5 gap-2">
          <Card image={""} />
          <Card image={""} />
          <Card image={""} />
        </div>
      </div>
    </div>
  );
}
