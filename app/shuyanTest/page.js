"use client";

import { useState } from "react";
import Scene from "@/components/shuyan/scene";
import ClueText from "@/components/shuyan/clueText";
import SolarPanel from "@/components/shuyan/solarPanel";

export default function Home() {
  const words = ["sun", "solar", "energy", "renewable"];

  const [level, setLevel] = useState(0);
  const [filledCount, setFilledCount] = useState(1);

  let wordIndex = level;
  if (wordIndex > 3) {
    wordIndex = 3;
  }

  const currentWord = words[wordIndex];

  const fillNextLetter = () => {
    if (filledCount < currentWord.length) {
      setFilledCount(filledCount + 1);
    }
  };

  const nextLevel = () => {
    if (filledCount === currentWord.length) {
      if (level < 4) {
        setLevel(level + 1);
        setFilledCount(1);
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <button
        onClick={fillNextLetter}
        style={{
          position: "absolute",
          top: "2rem",
          left: "2rem",
          zIndex: 20,
          padding: "0.8rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        Fill Letter
      </button>

      <button
        onClick={nextLevel}
        style={{
          position: "absolute",
          top: "5rem",
          left: "2rem",
          zIndex: 20,
          padding: "0.8rem 1rem",
          borderRadius: "0.5rem",
          border: "none",
          cursor: "pointer",
        }}
      >
        Next Level
      </button>

      <Scene level={level} />
      <ClueText level={level} />
      <SolarPanel level={level} filledCount={filledCount} />
    </div>
  );
}