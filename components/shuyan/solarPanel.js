"use client";

export default function SolarPanel({ targetWord, filledCount }) {
  const letters = targetWord.toUpperCase().split("");

  return (
    <div
      style={{
        position: "absolute",
        left: "3.5vw",
        bottom: "18vh",
        zIndex: 8,
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
          let boxBg = "rgba(255,255,255,0.75)";
          let textColor = "#1f1f1f";

          if (index === 0) {
            boxText = letter;
            boxBg = "#ffe600";
          } else if (index < filledCount) {
            boxText = letter;
            boxBg = "#ffe600";
          }

          return (
            <div
              key={index}
              style={{
                width: "2.4rem",
                height: "2.4rem",
                border: "0.18rem solid #ffe600",
                borderRadius: "0.4rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.5rem",
                fontWeight: "800",
                color: textColor,
                backgroundColor: boxBg,
                boxShadow: "0 0 6px rgba(0,0,0,0.2)",
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