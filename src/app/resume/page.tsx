import Heading from "@/components/Heading";
import Link from "next/link";
import Image from "next/image";
import profile from "../../../public/profile.jpg";

export default function resume() {
  return (
    <div className=" w-full flex flex-col  lg:px-40 md:px-9 sm:px-5 px-5 lg:mt-40 md:mt-24 sm:mt-16 mt-10">
      {/* About me */}

      <Heading heading="Resume" />
      <div className="flex flex-row justify-center">
        <Link
          href={"/"}
          className="text-gray-500 hover:text-cyan-700 ease-in-out duration-300 text-sm cursor-pointer"
        >
          Home
        </Link>
        <div className="text-sm mx-2">/</div>
        <Link
          href={"/resume"}
          className="text-gray-500 hover:text-cyan-700 ease-in-out duration-300 text-sm cursor-pointer"
        >
          Resume
        </Link>
      </div>
      <div className="h-72" />

      <div className="mb-40">
        <div className="underline decoration-4 underline-offset-1 decoration-[#F97300] ">
          ABOUT ME
        </div>
        <div className="flex flex-row max-h-max mt-5">
          <div className=" size-20  rounded-full bg-cyan-200 mr-10 overflow-hidden">
            <Image src={profile} alt="profile" width={100} height={100} />
          </div>
          <div className="flex-1">
            <div className=" text-xs  mb-3">
              I’m an enterprise level web/mobile application developer with the
              expertise in Frameworks / Programming Languages Angular + NodeJS +
              NESTJS + Flutter + Serverless + GraphQL + WebRTC etc.
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  mb-2 mt-5">
              <div className="text-[11px]  col-span-1">
                <span className="font-bold text-cyan-700">Name</span>: Anshul
                Sharma
              </div>
              <div className="text-[11px]  col-span-1">
                {" "}
                <span className="font-bold text-cyan-700">Age</span>: 24 Years{" "}
              </div>
              <div className="text-[11px]  col-span-1">
                <span className="font-bold text-cyan-700">Job</span>: Software
                Engineer(2 Years)
              </div>
              <div className="text-[11px]  col-span-1">
                <span className="font-bold text-cyan-700">Citizenship</span>:
                Indian
              </div>
              <div className="text-[11px]  col-span-1">
                <span className="font-bold text-cyan-700">Residence</span>:
                Ambala,Haryana{" "}
              </div>
              <div className="text-[9px]  col-span-1">
                <span className="font-bold text-[11px] text-cyan-700">
                  E-mail
                </span>
                : anshulsharma.sd.2000@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Education */}

      <div className="mb-20">
        <div className="underline decoration-4 underline-offset-1 decoration-[#F97300] ">
          My Skills
        </div>
        <div className="flex flex-row max-h-max mt-5">
          <div className=" text-xs  mb-3">
            Angular, Typescript, NodeJs, Flutter, GraphQL, Serverless, WebRTC,
            NestJs, Ngrx, Dart, Material, AWS, AWS Amplify, MongoDB, AWS
            Websockets
          </div>
        </div>
      </div>
      {/* experience */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-5">
        <div className="">
          <div className="underline decoration-4 underline-offset-1 decoration-[#F97300] ">
            Experience
          </div>
          <div className="flex flex-col max-h-max mt-5">
            <div className="flex flex-row relative top-9">
              <div className="h-32 w-8 border-l-4 border-t-4  border-cyan-700 mt-2"></div>
              <div>
                <div className="relative border-2 h-min px-1 border-cyan-700 text-cyan-700 text-[12px] w-max mb-2">
                  October 2023 - Present
                </div>
                <div className="text-[12px] font-bold mb-2">Astro Bharat</div>
                <div className="text-[12px] ">Founding Member Tech</div>
              </div>
            </div>
            <div className="flex flex-row relative top-6">
              <div className="h-32 w-8 border-l-4 border-t-4  border-cyan-700 mt-2 "></div>
              <div>
                <div className="relative border-2 h-min px-1 border-cyan-700 text-cyan-700 text-[12px] w-max mb-2">
                  March 2023 - September 2023
                </div>
                <div className="text-[12px] font-bold mb-2">Guruji Astro</div>
                <div className="text-[12px] ">Backend Lead</div>
              </div>
            </div>
            <div className="flex flex-row relative top-3">
              <div className="h-32 w-8 border-l-4 border-t-4 border-b-4 border-cyan-700 mt-2 "></div>
              <div>
                <div className="relative border-2 h-min px-1 border-cyan-700 text-cyan-700 text-[12px] w-max mb-2">
                  May 2022 - March 2023
                </div>
                <div className="text-[12px] font-bold mb-2">Guruji Astro</div>
                <div className="text-[12px] ">Software engineer</div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="h-32 w-8  mt-2"></div>
              <div>
                <div className="relative border-2 h-min px-1 border-cyan-700 text-cyan-700 text-[12px] w-max mb-2">
                  January 2022 - June 2022
                </div>
                <div className="text-[12px] font-bold mb-2">Coding Ninja</div>
                <div className="text-[12px] ">Teaching Assistant</div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="underline decoration-4 underline-offset-1 decoration-[#F97300] ">
            Education
          </div>
          <div className="">
            <div className="flex flex-row relative top-12">
              <div className="h-32 w-8 border-l-4 border-t-4  border-cyan-700 mt-2"></div>
              <div>
                <div className="relative border-2 h-min px-1 border-cyan-700 text-cyan-700 text-[12px] w-max mb-2">
                  August 2019 - June 2022
                </div>
                <div className="text-[12px] font-bold mb-2">
                  Lovely Professional University
                </div>
                <div className="text-[12px] ">
                  Bachelors in science (computer science)
                </div>
              </div>
            </div>
            <div className="flex flex-row relative top-9">
              <div className="h-32 w-8  border-t-4  border-cyan-700 mt-2"></div>
              <div>
                <div className="relative border-2 h-min px-1 border-cyan-700 text-cyan-700 text-[12px] w-max mb-2">
                  2017 - 2019
                </div>
                <div className="text-[12px] font-bold mb-2">DAV</div>
                <div className="text-[12px] ">High School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
