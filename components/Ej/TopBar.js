"use client";

import { useState } from "react";
import Image from "next/image";
import restartImg from "./IconImages/restart.png";
import leafImg from "./IconImages/leaf.png";

export default function TopBar({ levelNumber = 1, levelName = "Solar Starter", onRestart }) {
    const [pressed, setPressed] = useState(false);

    function handleRestart() {
        setPressed(true);
        setTimeout(() => setPressed(false), 150);
        if (onRestart) onRestart();
    }

    return (
        <div style={{
            background: "#e8f8e8",
            padding: "12px 20px 12px 20px",
            fontFamily: "'Space Mono', monospace",
            width: "100%",
            boxSizing: "border-box",
        }}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 65,
                overflow: "hidden",
            }}>
                <button
                    onClick={handleRestart}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transform: pressed ? "scale(0.95)" : "scale(1)",
                        transition: "transform 0.1s",
                    }}
                >
                    <Image
                        src={restartImg}
                        alt="Restart"
                        width={40}
                        height={40}
                        style={{ width: 40, height: 40, objectFit: "contain", flexShrink: 0 }}
                    />
                    <span style={{
                        fontSize: 20,
                        fontWeight: 700,
                        color: "#2db52d",
                        letterSpacing: "0.01em",
                    }}>
                        Restart
                    </span>
                </button>

                <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                }}>
                    <span style={{ color: "#f5854a" }}>Level {levelNumber} –</span>
                    <span style={{ color: "#2db52d" }}>{levelName}</span>
                    <Image
                        src={leafImg}
                        alt="Leaf"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
        </div>
    );
}