"use client";

export default function ClueText({ level }) {
  const clues = [
    "A bright star in the sky that gives us light and heat.",
    "Related to energy that comes from the sun.",
    "The power that makes things work, like light, heat, or movement.",
    "Energy from natural sources that will not run out.",
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
        top: "12vh",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
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