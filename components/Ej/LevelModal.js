"use client";

export default function LevelModal({ levelNumber = 1, co2Saved = 500, equivalent = "2 potted plants", onNext, onClose }) {
    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
        }}>
            <div style={{
                background: "#3a7d2c",
                borderRadius: 16,
                padding: 6,
                width: 320,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                position: "relative",
                fontFamily: "'Space Mono', monospace",
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: -10,
                        right: -10,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "#e05a3a",
                        border: "none",
                        cursor: "pointer",
                        color: "white",
                        fontSize: 14,
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1,
                    }}
                >
                    ✕
                </button>

                <div style={{
                    background: "#f0f7e6",
                    borderRadius: 12,
                    padding: "28px 24px 24px 24px",
                    textAlign: "center",
                }}>
                    <p style={{
                        fontSize: 22,
                        fontWeight: 700,
                        color: "#3a7d2c",
                        margin: "0 0 16px 0",
                    }}>
                        Level {levelNumber} Complete!
                    </p>

                    <p style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#222",
                        margin: "0 0 8px 0",
                    }}>
                        You saved <span style={{ color: "#3a7d2c" }}>{co2Saved}g</span> of CO₂!
                    </p>

                    <p style={{
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#222",
                        margin: "0 0 24px 0",
                    }}>
                        Equivalent to saving <span style={{ color: "#3a7d2c" }}>{equivalent}</span>!
                    </p>

                    <button
                        onClick={onNext}
                        style={{
                            background: "#d4853a",
                            color: "white",
                            border: "none",
                            borderRadius: 10,
                            padding: "12px 32px",
                            fontSize: 16,
                            fontWeight: 700,
                            cursor: "pointer",
                            fontFamily: "'Space Mono', monospace",
                        }}
                    >
                        Next Level&gt;&gt;
                    </button>
                </div>
            </div>
        </div>
    );
}