import { useEffect, useRef } from "react";

export default function TypewriterText() {
  const text = useRef<HTMLDivElement>(null);

  const words = [
    "Full Stack Software Engineer                     ",
    "Based in india                      ",
  ];

  useEffect(() => {
    let j = words[0];
    let k = words[0].charAt(0);
    let flip = 0;

    const interval = setInterval(() => {
      if (k === "") {
        flip = 0;
        j = j === words[0] ? words[1] : words[0];
      }

      if (flip === 0) {
        k += j[k.length];
      } else {
        k = k.substring(0, k.length - 1);
      }

      if (text.current) {
        text.current.innerText = String(k);
      }
      if (k.length === j.length) {
        flip = 1;
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return <div className="text-[12px]  " ref={text}></div>;
}
