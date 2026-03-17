"use client";

export default function SolarPanel({ level, filledCount }) {
  const words = ["sun", "solar", "energy", "renewable"];

  let wordIndex = level;
  if (wordIndex > 3) {
    wordIndex = 3;
  }

  const currentWord = words[wordIndex];
  const letters = currentWord.split("");

  return (
    <div
      style={{
        position: "absolute",
        left: "5vw",
        bottom: "18vh",
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          marginBottom: "-1rem",
          alignItems: "center",
        }}
      >
        {letters.map((letter, index) => {
          let boxText = "";

          if (index === 0) {
            boxText = letter;
          } else if (index < filledCount) {
            boxText = letter;
          }

          return (
            <div
              key={index}
              style={{
                width: "2rem",
                height: "2rem",
                border: "0.2rem solid #ffea00ff",
                borderRadius: "0.2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                fontWeight: "700",
                color: "white",
                backgroundColor: "rgba(255,255,255,0.12)",
              }}
            >
              {boxText}
            </div>
          );
        })}
      </div>

      <img
        src="/solarpanel.svg"
        alt="solar panel"
        style={{
          width: "10rem",
          display: "block",
        }}
      />
    </div>
  );
}