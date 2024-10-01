import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaHashnode } from "react-icons/fa6";
import Link from "next/link";

const roboto = Roboto_Mono({ weight: "400", subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Anshul Sharma",
  description: "Anshul Sharma Portfolio",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main
          className={` h-full w-full p-6 bg-cyan-600 ${roboto.className} tracking-wide ease-in-out duration-300`}
        >
          <div className="flex flex-col size-full bg-white justify-between">
            <div className="h-20 w-full  flex justify-end">
              <div className="bg-white h-full max-w-fit flex  mr-7">
                <div className="h-full w-24  flex justify-center items-center ">
                  <Link
                    href={"/resume"}
                    className="text-black hover:text-cyan-700 active:scale-90 ease-in-out duration-300 text-xs cursor-pointer "
                  >
                    Resume
                  </Link>
                </div>
                <div className="h-full w-24 flex justify-center items-center mr-5">
                  <Link
                    href={"/portfolio"}
                    className="text-black hover:text-cyan-700 active:scale-90 text-xs cursor-pointer ease-in-out duration-300"
                  >
                    Portfolio
                  </Link>
                </div>
                <div className="h-full w-24  flex justify-center items-center ">
                  <Link
                    href={"/contacts"}
                    className="px-5 py-2 text-black border hover:bg-cyan-600 hover:text-white text-xs cursor-pointer ease-in-out duration-300 active:scale-90"
                  >
                    Contacts
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-scroll">
              {/* flex flex-col justify-center items-center lg:px-32 md:px-9 sm:px-5 */}
              {children}
            </div>
            <div className="h-16 w-full flex  items-end justify-between px-5 pb-5">
              <div className="text-gray-400 text-xs">
                © 2024 All rights reserved.
              </div>
              <div className="text-gray-400 text-xs flex gap-2">
                <Link
                  href={"https://www.linkedin.com/in/anshul-sharma-632529148/"}
                >
                  <FaLinkedin className="text-gray-500 hover:text-cyan-700 cursor-pointer size-4" />
                </Link>
                <Link href={"https://x.com/anshul00ns"}>
                  <FaSquareXTwitter className="text-gray-500 hover:text-cyan-700 cursor-pointer size-4" />
                </Link>
                <Link href={"https://github.com/Anshul00Sharma"}>
                  <FaGithub className="text-gray-500 hover:text-cyan-700 cursor-pointer size-4" />
                </Link>
                <Link href={"https://sd-anshulsharma.hashnode.dev/"}>
                  <FaHashnode className="text-gray-500 hover:text-cyan-700 cursor-pointer size-4" />
                </Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
