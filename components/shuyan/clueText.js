"use client";

export default function ClueText({ level }) {
  const clues = [
    "A bright star in the sky that gives us light and heat.",
    "Energy that comes from the sun and can be used as power.",
    "The power that makes things work, like light, heat, or movement.",
    "Energy that comes from natural sources and will not run out.",
  ];

  let clueIndex = level;
  if (clueIndex > 3) {
    clueIndex = 3;
  }

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        top: "4vh",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 10,
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontSize: "1.6rem",
          fontWeight: "600",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "1rem 2rem",
          borderRadius: "1rem",
          display: "inline-block",
          maxWidth: "70%",
        }}
      >
        {clues[clueIndex]}
      </div>
    </div>
  );
}