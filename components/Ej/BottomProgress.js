"use client";

const LEVELS = [
  { id: 1, name: "Level-1" },
  { id: 2, name: "Level-2" },
  { id: 3, name: "Level-3" },
  { id: 4, name: "Level-4" },
];

export default function BottomProgress({
  currentLevel = 1,
  completedLevels = [],
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#e8f8e8",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        zIndex: 10,
        fontFamily: "'Space Mono', monospace",
      }}
    >
      <button
        style={{
          background: "#2db52d",
          color: "white",
          border: "none",
          borderRadius: 10,
          padding: "10px 20px",
          fontSize: 15,
          fontWeight: 700,
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontFamily: "'Space Mono', monospace",
        }}
      >
        Try to fill the word
      </button>

      {LEVELS.map((level) => {
        const isCompleted = completedLevels.includes(level.id);
        const isCurrent = level.id === currentLevel;

        return (
          <div
            key={level.id}
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                border: "3px solid #2db52d",
                borderRadius: 10,
                padding: "8px 16px",
                fontSize: 15,
                fontWeight: 700,
                background: isCompleted ? "#2db52d" : "white",
                color: isCompleted
                  ? "white"
                  : isCurrent
                  ? "#f5854a"
                  : "#2db52d",
                display: "inline-block",
                boxSizing: "border-box",

                boxShadow: isCompleted
                  ? "0 0 6px rgba(45,181,45,0.6)"
                  : "none",
              }}
            >
              {level.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}