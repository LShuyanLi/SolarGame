"use client";

import { useState, useEffect } from "react";

function randomLetter() {
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
}

const INITIAL_SUNS = [
    { id: 1, x: 100, y: 50, falling: false, label: randomLetter() },
    { id: 2, x: 250, y: 100, falling: false, label: randomLetter() },
    { id: 3, x: 400, y: 50, falling: false, label: randomLetter() },
    { id: 4, x: 550, y: 100, falling: false, label: randomLetter() },
    { id: 5, x: 700, y: 50, falling: false, label: randomLetter() },
    { id: 6, x: 850, y: 100, falling: false, label: randomLetter() },
    { id: 7, x: 1000, y: 50, falling: false, label: randomLetter() },
    { id: 8, x: 1150, y: 100, falling: false, label: randomLetter() },
    { id: 9, x: 1300, y: 50, falling: false, label: randomLetter() },
    { id: 10, x: 100, y: 150, falling: false, label: randomLetter() },
    { id: 11, x: 250, y: 200, falling: false, label: randomLetter() },
    { id: 12, x: 400, y: 150, falling: false, label: randomLetter() },
    { id: 13, x: 550, y: 200, falling: false, label: randomLetter() },
    { id: 14, x: 700, y: 150, falling: false, label: randomLetter() },
    { id: 15, x: 850, y: 200, falling: false, label: randomLetter() },
    { id: 16, x: 1000, y: 150, falling: false, label: randomLetter() },
    { id: 17, x: 1150, y: 200, falling: false, label: randomLetter() },
    { id: 18, x: 1300, y: 150, falling: false, label: randomLetter() },
    { id: 19, x: 100, y: 250, falling: false, label: randomLetter() },
    { id: 20, x: 250, y: 300, falling: false, label: randomLetter() },
    { id: 21, x: 400, y: 250, falling: false, label: randomLetter() },
    { id: 22, x: 550, y: 300, falling: false, label: randomLetter() },
    { id: 23, x: 700, y: 250, falling: false, label: randomLetter() },
    { id: 24, x: 850, y: 300, falling: false, label: randomLetter() },
    { id: 25, x: 1000, y: 250, falling: false, label: randomLetter() },
    { id: 26, x: 1150, y: 300, falling: false, label: randomLetter() },
    { id: 27, x: 1300, y: 250, falling: false, label: randomLetter() },
];

export default function FallingSun() {
    const [suns, setSuns] = useState(INITIAL_SUNS);

    function handleSunClick(id) {
        setSuns(prev =>
            prev.map(sun => sun.id === id ? { ...sun, falling: true } : sun)
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
        <div style={{ height: "100vh", width: "100%", position: "relative", overflow: "hidden" }}>
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