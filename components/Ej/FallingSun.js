"use client";

import { useState, useEffect } from "react";

function randomLetter() {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}


const INITIAL_POSITIONS = [
  { id: 1, x: "8%", y: "23%" },
  { id: 2, x: "18%", y: "28%" },
  { id: 3, x: "28%", y: "23%" },
  { id: 4, x: "39%", y: "28%" },
  { id: 5, x: "50%", y: "23%" },
  { id: 6, x: "61%", y: "28%" },
  { id: 7, x: "72%", y: "23%" },
  { id: 8, x: "83%", y: "28%" },
  { id: 9, x: "92%", y: "23%" },
  { id: 10, x: "8%", y: "35%" },
  { id: 11, x: "18%", y: "40%" },
  { id: 12, x: "28%", y: "35%" },
  { id: 13, x: "39%", y: "40%" },
  { id: 14, x: "50%", y: "35%" },
  { id: 15, x: "61%", y: "40%" },
  { id: 16, x: "72%", y: "35%" },
  { id: 17, x: "83%", y: "40%" },
  { id: 18, x: "92%", y: "35%" },
];

function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[i],
    ];
  }

  return newArray;
}

function buildSuns(targetWord) {
  const upperWord = targetWord.toUpperCase();


  const targetLetters = upperWord.slice(1).split("");

  const fillerCount = INITIAL_POSITIONS.length - targetLetters.length;
  const fillerLetters = [];

  for (let i = 0; i < fillerCount; i++) {
    fillerLetters.push(randomLetter());
  }

  const allLabels = shuffleArray([...targetLetters, ...fillerLetters]);

  return INITIAL_POSITIONS.map((position, index) => {
    return {
      ...position,
      falling: false,
      label: allLabels[index],
      fallOffset: 0,
    };
  });
}

export default function FallingSun({
  targetWord,
  filledCount,
  resetSignal,
  onCorrectLetter,
}) {
  const [suns, setSuns] = useState(buildSuns(targetWord));


  useEffect(() => {
    setSuns(buildSuns(targetWord));
  }, [targetWord, resetSignal]);

  function handleSunClick(id) {
    const nextLetter = targetWord.toUpperCase()[filledCount];

    if (!nextLetter) return;

    const clickedSun = suns.find((sun) => sun.id === id);

    if (!clickedSun) return;

    if (clickedSun.label !== nextLetter) return;

    if (clickedSun.falling) return;


    setSuns((prev) =>
      prev.map((sun) =>
        sun.id === id ? { ...sun, falling: true } : sun
      )
    );

    if (onCorrectLetter) {
      onCorrectLetter();
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSuns((prev) =>
        prev
          .map((sun) => {
            if (!sun.falling) return sun;

            if (sun.fallOffset > window.innerHeight) {
              return null;
            }

            return {
              ...sun,
              fallOffset: sun.fallOffset + 10,
            };
          })
          .filter(Boolean)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
    style={{
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      zIndex: 35,
      pointerEvents: "none",
    }}
  >
    {suns.map((sun) => (
      <div
        key={sun.id}
        onClick={() => handleSunClick(sun.id)}
        style={{
          position: "absolute",
          left: sun.x,
          top: `calc(${sun.y} + ${sun.fallOffset}px)`,
          transform: "translate(-50%, -50%)",
          userSelect: "none",
          cursor: "pointer",
          zIndex: 40,
          pointerEvents: "auto",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "1rem",
            fontWeight: "bold",
            zIndex: 2,
            pointerEvents: "none",
            color: "red",
            WebkitTextStroke: "1px black",
          }}
        >
          {sun.label}
        </span>

        <span
          style={{
            fontSize: "3.2rem",
            lineHeight: 1,
            display: "block",
          }}
        >
          ☀️
        </span>
      </div>
    ))}
  </div>
  );
}