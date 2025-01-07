import { useEffect, useRef } from "react";

export default function TypewriterText() {
  const text = useRef<HTMLDivElement>(null);

  const words = [
    "Full Stack Software Engineer                     ",
    "Based in India                      ",
    "Passionate about coding and problem-solving     ",
    "Specialized in React Native      ",
  ];

  useEffect(() => {
    let currentWordIndex = 0;
    let currentWord = words[currentWordIndex];
    let displayedText = "";
    let isDeleting = false;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing effect
        displayedText += currentWord[displayedText.length];
      } else {
        // Deleting effect
        displayedText = displayedText.substring(0, displayedText.length - 1);
      }

      if (text.current) {
        text.current.innerText = displayedText;
      }

      if (!isDeleting && displayedText.length === currentWord.length) {
        // Start deleting after typing the whole word
        isDeleting = true;
      } else if (isDeleting && displayedText === "") {
        // Move to the next word after deleting
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        currentWord = words[currentWordIndex];
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return <div className="text-[12px]" ref={text}></div>;
}
