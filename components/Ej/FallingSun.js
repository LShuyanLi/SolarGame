"use client";

import { useState, useEffect } from "react";

function randomLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

function generateSuns(targetWord) {
    const positions = [
        { x: 100, y: 50 }, { x: 250, y: 100 }, { x: 400, y: 50 },
        { x: 550, y: 100 }, { x: 700, y: 50 }, { x: 850, y: 100 },
        { x: 1000, y: 50 }, { x: 1150, y: 100 }, { x: 1300, y: 50 },
        { x: 100, y: 150 }, { x: 250, y: 200 }, { x: 400, y: 150 },
        { x: 550, y: 200 }, { x: 700, y: 150 }, { x: 850, y: 200 },
        { x: 1000, y: 150 }, { x: 1150, y: 200 }, { x: 1300, y: 150 },
        { x: 100, y: 250 }, { x: 250, y: 300 }, { x: 400, y: 250 },
        { x: 550, y: 300 }, { x: 700, y: 250 }, { x: 850, y: 300 },
        { x: 1000, y: 250 }, { x: 1150, y: 300 }, { x: 1300, y: 250 },
    ];

    const letters = positions.map(() => randomLetter());
    const targetLetters = targetWord.toUpperCase().split("");
    targetLetters.forEach((char, i) => {
        const slot = i % positions.length;
        letters[slot] = char;
    });

    return positions.map((pos, i) => ({
        id: i + 1,
        x: pos.x,
        y: pos.y,
        falling: false,
        label: letters[i],
    }));
}

export default function FallingSun({ resetSignal, targetWord = "SOLAR", onLevelComplete }) {
    const [suns, setSuns] = useState(() => generateSuns(targetWord));
    const [builtWord, setBuiltWord] = useState("");

    useEffect(() => {
        setSuns(generateSuns(targetWord));
        setBuiltWord("");
    }, [resetSignal, targetWord]);

    useEffect(() => {
        if (builtWord.toUpperCase() === targetWord.toUpperCase()) {
            if (onLevelComplete) onLevelComplete();
        }
    }, [builtWord, targetWord, onLevelComplete]);

    function handleSunClick(id) {
        const sun = suns.find(s => s.id === id);
        if (!sun || sun.falling) return;
        setBuiltWord(prev => prev + sun.label);
        setSuns(prev =>
            prev.map(s => s.id === id ? { ...s, falling: true } : s)
        );
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSuns(prev =>
                prev
                    .map(sun => {
                        if (!sun.falling) return sun;
                        if (sun.y >= window.innerHeight) return null;
                        return { ...sun, y: sun.y + 10 };
                    })
                    .filter(Boolean)
            );
        }, 16);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{
            height: "100vh",
            width: "100%",
            position: "relative",
            overflow: "hidden",
        }}>
            <div style={{
                position: "absolute",
                bottom: 20,
                width: "100%",
                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 700,
                fontFamily: "'Space Mono', monospace",
                color: "white",
                WebkitTextStroke: "1px black",
                zIndex: 2,
                letterSpacing: "0.2em",
            }}>
                {builtWord || "_"}
            </div>

            {suns.map(sun => (
                <div
                    key={sun.id}
                    onClick={() => handleSunClick(sun.id)}
                    style={{
                        position: "absolute",
                        left: sun.x,
                        top: sun.y,
                        userSelect: "none",
                        cursor: "pointer",
                        zIndex: 1,
                    }}
                >
                    <span style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        zIndex: 1,
                        pointerEvents: "none",
                        color: "red",
                        WebkitTextStroke: "1px black",
                    }}>
                        {sun.label}
                    </span>
                    <span style={{ fontSize: "3rem" }}>☀️</span>
                </div>
            ))}
        </div>
    );
}