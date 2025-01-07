"use client";

import React from "react";
import Image from "next/image";
import ss1 from "../../public/Screenshot_20250107-093847.jpg";
import ss2 from "../../public/Screenshot_20250107-093845.png";
import ss3 from "../../public/Screenshot_20250107-093826.png";
import ss4 from "../../public/Screenshot_20250107-093820.png";
import ss5 from "../../public/Screenshot_20250107-093808.png";
import ss6 from "../../public/Screenshot_20250107-093803.png";
import ss7 from "../../public/Screenshot_20250107-093759.png";
import ss8 from "../../public/Screenshot_20250107-093752.png";
import ss9 from "../../public/Screenshot_20250107-093651.png";
import ss10 from "../../public/Screenshot_20250107-093629.png";
import ss11 from "../../public/Screenshot_20250107-093624.png";
import ss12 from "../../public/Screenshot 2025-01-07 174907.png";
import ss13 from "../../public/Screenshot 2025-01-07 175249.png";

const Search = () => {
  return (
    <>
      <div className="text-3xl mt-10 font-bold text-cyan-700">
        Ai search Agent
      </div>
      <div className=" w-[60%]  ">
        <div className=" mt-5 mx-5 text-2xl font-bold">Gallery</div>
        <div className=" flex flex-row my-5 mx-5 overflow-scroll w-[100%]">
          <Image
            className="h-[300px] w-[500px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss13}
            alt="vocab1"
          />
        </div>
        <div className=" mt-5 mx-5 text-2xl font-bold">Tech Stack</div>
        <div className=" flex flex-row my-5 mx-5">
          <div className="mr-5">Python</div>
          <div className="mr-5">FastApi</div>
          <div className="mr-5">Streamlit</div>
          <div className="mr-5">Docker</div>
          <div className="mr-5">Lang chain</div>
        </div>
        <div className=" mx-5 text-2xl font-bold">Details</div>
        <div className=" mt-5 mx-5 ">
          This a project is build within 2 days . for 100x engineer hackathon.
          it was shortlisted for the semi finals.
          <b /> An AI Chatbot That Learns & Updates in Real-Time! 🌐 In a world
          where staying updated is key, I’ve developed an AI-powered agent
          chatbot that can: ✅ Search the internet for real-time information. ✅
          Reply intelligently with the latest, most relevant insights. ✅ Bridge
          the gap between AI and real-time data seamlessly. 🔍 How does it work?
          When users ask a question, the chatbot queries the web for up-to-date
          answers. It processes the data, summarizes the results, and provides
          concise, actionable replies. The app is built using state-of-the-art
          inference models and requires a Groq API key for LLM
          inference—ensuring fast, accurate, and efficient responses. ✨
          Applications: This technology can redefine how we approach research,
          customer service, and personalized assistance, opening endless
          opportunities in education, business, and beyond.
        </div>

        <div className=" mt-5 mx-5 text-2xl font-bold">
          Here is the hosted URL
        </div>

        <div className=" mx-5">
          <a
            href={"https://searchengine-3qhswjatgesgjpg4tef2qx.streamlit.app/"}
            className="text-blue-600 hover:underline"
          >
            Hosted URL
          </a>
        </div>
      </div>
    </>
  );
};
const TwitterBot = () => {
  return (
    <>
      <div className="text-3xl mt-10 font-bold text-cyan-700">
        Comrade Karl Smith Marx
      </div>
      <div className=" w-[60%]  ">
        <div className=" mt-5 mx-5 text-2xl font-bold">Gallery</div>
        <div className=" flex flex-row my-5 mx-5 overflow-scroll w-[100%]">
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss12}
            alt="vocab1"
          />
        </div>
        <div className=" mt-5 mx-5 text-2xl font-bold">Tech Stack</div>
        <div className=" flex flex-row my-5 mx-5">
          <div className="mr-5">Python</div>
          <div className="mr-5">FastApi</div>
          <div className="mr-5">Cloud Run</div>
          <div className="mr-5">Docker</div>
          <div className="mr-5">Lang chain</div>
        </div>
        <div className=" mx-5 text-2xl font-bold">Details</div>
        <div className=" mt-5 mx-5 ">
          At its core, this bot is designed to entertain. Its primary function
          is to generate a tweet every thirty minutes, each offering a satirical
          take on potential startups. These ideas, while often nonsensical, are
          rooted in a clever blend of absurdity and Marxist philosophy. By
          poking fun at the excesses of capitalism and imagining comically
          extreme socialist alternatives, the bot invites users to question the
          underlying assumptions of both systems. The bot s content is
          characterized by its sharp wit and ability to identify the hypocrisies
          and contradictions inherent in both capitalist and socialist
          ideologies. It does not shy away from targeting both sides, often
          employing satire to expose the flaws and limitations of each. By
          satirizing the capitalist pursuit of profit and the socialist ideal of
          collective ownership, the bot encourages critical thinking and
          challenges conventional wisdom. Beyond its comedic value, the bot
          serves as a platform for social commentary. By highlighting the
          absurdity of certain economic and political ideas, it invites users to
          engage in discussions about pressing social issues. The bot s ability
          to spark conversations and generate debate is a testament to its
          influence and relevance. One of the key strategies employed by the bot
          to increase its follower count is its active engagement with its
          audience. By responding to replies and comments, the bot fosters a
          sense of community and encourages user participation. This interactive
          approach not only helps to grow the bot s following but also
          strengthens its connection with its audience. In conclusion, this
          Twitter bot offers a unique and entertaining perspective on economic
          and political ideologies. By combining satire, absurdity, and Marxist
          philosophy, it invites users to challenge their assumptions and think
          critically about the world around them. it has the potential to shape
          public discourse and inspire future generations of digital satirists.
        </div>

        <div className=" mt-5 mx-5 text-2xl font-bold">
          Here is the video demo
        </div>

        <div className=" mx-5">
          <a
            href={
              "https://almond-weaver-3ce.notion.site/Demo-Video-1495abae06c88087ad8fddc7a68aaa2e"
            }
            className="text-blue-600 hover:underline"
          >
            demo
          </a>
        </div>
      </div>
    </>
  );
};
const Vocab = () => {
  return (
    <>
      <div className="text-3xl mt-10 font-bold text-cyan-700">
        The Vocabulary app
      </div>
      <div className="h-[50%] w-[30%] border-4 border-[#F97300] mt-10">
        <iframe
          className="w-full h-full"
          src={"https://www.youtube.com/embed/JiSjFMnHqh0"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className=" w-[60%]  ">
        <div className=" mt-5 mx-5 text-2xl font-bold">Gallery</div>
        <div className=" flex flex-row my-5 mx-5 overflow-scroll w-[100%]">
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss1}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss2}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss3}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss4}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss5}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss6}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss7}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss8}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss9}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss10}
            alt="vocab1"
          />
          <Image
            className="h-[300px] w-[160px] border-2 border-[#F97300] mr-2 rounded-md"
            src={ss11}
            alt="vocab1"
          />
        </div>
        <div className=" mt-5 mx-5 text-2xl font-bold">Tech Stack</div>
        <div className=" flex flex-row my-5 mx-5">
          <div className="mr-5">React Native</div>
          <div className="mr-5">Expo</div>
          <div className="mr-5">Typescript</div>
          <div className="mr-5">Supabase</div>
          <div className="mr-5">FastApi</div>
          <div className="mr-5">Cloud Run</div>
          <div className="mr-5">Docker</div>
        </div>
        <div className=" flex flex-row my-5 mx-5">
          <div className="mr-5">Lang chain</div>
        </div>
        <div className=" mx-5 text-2xl font-bold">Details</div>
        <div className=" mt-5 mx-5 ">
          This is a sophisticated vocabulary-building application designed to
          enhance your language skills through an immersive reading experience.
          The app allows users to explore a vast library of books while
          seamlessly integrating a powerful feature: the ability to instantly
          access detailed definitions and meanings of any word with a simple
          click. Whether youre an avid reader, a language learner, or someone
          looking to expand your vocabulary, this app provides a user-friendly
          and intuitive platform to make learning effortless and engaging. By
          combining the joy of reading with advanced word lookup functionality,
          it empowers users to deepen their understanding of language and
          improve their communication skills in a natural and enjoyable way.
        </div>

        <div className=" mt-5 mx-5 text-2xl font-bold">Android apk link</div>

        <div className=" mx-5">
          <a
            href={"https://expo.dev/artifacts/eas/hCcC4mFmjK5WNFtVhb4LPg.apk"}
            className="text-blue-600 hover:underline"
          >
            Here is the link to Download
          </a>
        </div>
      </div>

      <div className="h-[10%] w-full" />
    </>
  );
};

const Modal = ({ target }: { target: string }) => {
  console.log(target);
  return (
    <div
      className="fixed inset-0 bg-stone-800 bg-opacity-75 flex justify-center items-center opacity-0 pointer-events-none transition-opacity duration-300 ease-out z-[9999]"
      id="one"
      aria-hidden="true"
    >
      <div className=" flex flex-col h-[80%] w-4/6 scale-95 transition-transform duration-300 ease-out bg-white border-8 border-cyan-600 items-center  justify-around relative overflow-scroll">
        <div
          data-dui-dismiss="modal"
          className="absolute top-1 right-1 w-[15px] h-[15px] bg-[#F97300] hover:scale-[1.1] active:scale-[1] transition-transform"
        ></div>
        {target === "one" ? <Vocab /> : null}
        {target === "two" ? <Search /> : null}
        {target === "three" ? <TwitterBot /> : null}
      </div>
    </div>
  );
};

export default Modal;
