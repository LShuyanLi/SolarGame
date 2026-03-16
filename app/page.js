"use client";

import { useState } from "react";
import FallingSun from "@/components/Ej/FallingSun";
import TopBar from "@/components/Ej/TopBar";
import GameBg from "@/components/Ej/GameBg";
import LevelModal from "@/components/Ej/LevelModal";
import BottomProgress from "@/components/Ej/BottomProgress";
import Battery from "@/components/Ej/Battery";

const LEVELS = [
    { levelNumber: 1, levelName: "Solar Starter", targetWord: "SOLAR", co2Saved: 500, equivalent: "2 potted plants" },
    { levelNumber: 2, levelName: "Sun Chaser", targetWord: "PANEL", co2Saved: 1000, equivalent: "4 potted plants" },
    { levelNumber: 3, levelName: "Energy Expert", targetWord: "POWER", co2Saved: 1500, equivalent: "6 potted plants" },
    { levelNumber: 4, levelName: "Solar Master", targetWord: "LIGHT", co2Saved: 2000, equivalent: "8 potted plants" },
];

export default function Home() {
    const [levelIndex, setLevelIndex] = useState(0);
    const [resetSignal, setResetSignal] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [completedLevels, setCompletedLevels] = useState([]);

    const currentLevel = LEVELS[levelIndex];

    function handleRestart() {
        setShowModal(false);
        setResetSignal(prev => prev + 1);
    }

    function handleLevelComplete() {
        setCompletedLevels(prev =>
            prev.includes(currentLevel.levelNumber)
                ? prev
                : [...prev, currentLevel.levelNumber]
        );
        setShowModal(true);
    }

    function handleNextLevel() {
        setShowModal(false);
        setLevelIndex(prev => (prev + 1) % LEVELS.length);
        setResetSignal(prev => prev + 1);
    }

    return (
        <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            <GameBg />
            <div style={{ position: "relative", zIndex: 1 }}>
                <TopBar
                    levelNumber={currentLevel.levelNumber}
                    levelName={currentLevel.levelName}
                    onRestart={handleRestart}
                />
                <FallingSun
                    resetSignal={resetSignal}
                    targetWord={currentLevel.targetWord}
                    onLevelComplete={handleLevelComplete}
                />
            </div>
            {showModal && (
                <LevelModal
                    levelNumber={currentLevel.levelNumber}
                    co2Saved={currentLevel.co2Saved}
                    equivalent={currentLevel.equivalent}
                    onNext={handleNextLevel}
                    onClose={handleRestart}
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