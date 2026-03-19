"use client";

import { useState } from "react";

import FallingSun from "@/components/Ej/FallingSun";
import TopBar from "@/components/Ej/TopBar";
import GameBg from "@/components/Ej/GameBg";
import LevelModal from "@/components/Ej/LevelModal";
import BottomProgress from "@/components/Ej/BottomProgress";
import Battery from "@/components/Ej/Battery";

import Scene from "@/components/shuyan/scene";
import ClueText from "@/components/shuyan/clueText";
import SolarPanel from "@/components/shuyan/solarPanel";

const LEVELS = [
  {
    levelNumber: 1,
    levelName: "Solar Starter",
    targetWord: "SUN",
    co2Saved: 500,
    equivalent: "2 potted plants",
  },
  {
    levelNumber: 2,
    levelName: "Sun Chaser",
    targetWord: "SOLAR",
    co2Saved: 1000,
    equivalent: "4 potted plants",
  },
  {
    levelNumber: 3,
    levelName: "Energy Expert",
    targetWord: "ENERGY",
    co2Saved: 1500,
    equivalent: "6 potted plants",
  },
  {
    levelNumber: 4,
    levelName: "Solar Master",
    targetWord: "RENEWABLE",
    co2Saved: 2000,
    equivalent: "8 potted plants",
  },
];

export default function Home() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [resetSignal, setResetSignal] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [completedLevels, setCompletedLevels] = useState([]);
  const [filledCount, setFilledCount] = useState(1);

  const currentLevel = LEVELS[levelIndex];
  const currentWord = currentLevel.targetWord;
  const isFinalLevel = levelIndex === LEVELS.length - 1;

  function handleRestart() {
    setShowModal(false);
    setLevelIndex(0);
    setCompletedLevels([]);
    setFilledCount(1);
    setResetSignal((prev) => prev + 1);
  }

  function handleCorrectLetter() {
    if (filledCount < currentWord.length) {
      const newCount = filledCount + 1;
      setFilledCount(newCount);

      if (newCount === currentWord.length) {
        setCompletedLevels((prev) =>
          prev.includes(currentLevel.levelNumber)
            ? prev
            : [...prev, currentLevel.levelNumber]
        );
        setShowModal(true);
      }
    }
  }

  function handleNextLevel() {
    setShowModal(false);

    if (levelIndex < LEVELS.length - 1) {
      setLevelIndex((prev) => prev + 1);
      setFilledCount(1);
      setResetSignal((prev) => prev + 1);
    } else {
      handleRestart();
    }
  }

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <GameBg />

      <Scene level={completedLevels.length} />
      <ClueText level={levelIndex} />
      <SolarPanel targetWord={currentWord} filledCount={filledCount} />

      <div
  style={{
    position: "absolute",
    inset: 0,
    zIndex: 30,
    pointerEvents: "none",
  }}
>
  <div
    style={{
      position: "relative",
      zIndex: 50,
      pointerEvents: "auto",
    }}
  >
    <TopBar
      levelNumber={currentLevel.levelNumber}
      levelName={currentLevel.levelName}
      onRestart={handleRestart}
    />
  </div>

  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 30,
      pointerEvents: "none",
    }}
  >
    <FallingSun
      resetSignal={resetSignal}
      targetWord={currentWord}
      filledCount={filledCount}
      onCorrectLetter={handleCorrectLetter}
    />
  </div>
</div>

      {showModal && (
        <LevelModal
          levelNumber={currentLevel.levelNumber}
          co2Saved={currentLevel.co2Saved}
          equivalent={currentLevel.equivalent}
          onNext={handleNextLevel}
          onClose={handleRestart}
          isFinalLevel={isFinalLevel}
        />
      )}

      <Battery chargePercent={completedLevels.length * 25} />

      <BottomProgress
        currentLevel={currentLevel.levelNumber}
        completedLevels={completedLevels}
      />
    </div>
  );
}