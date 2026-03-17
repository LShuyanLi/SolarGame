"use client";

export default function Scene({ level }) {
  let tree1 = "none";
  let tree2 = "none";
  let tree3 = "none";
  let tree4 = "none";

  let car2 = "none";
  let smallHouse2 = "none";
  let bigHouse2 = "none";
  let apartment2 = "none";

  if (level >= 1) {
    tree1 = "block";
    car2 = "block";
  }

  if (level >= 2) {
    tree2 = "block";
    smallHouse2 = "block";
  }

  if (level >= 3) {
    tree3 = "block";
    bigHouse2 = "block";
  }

  if (level >= 4) {
    tree4 = "block";
    apartment2 = "block";
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "6vw",
          display: "flex",
          gap: "3vw",
          alignItems: "flex-end",
        }}
      >
        <div style={{ position: "relative", width: "12rem" }}>
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "1vh",
              right: "10%",
              width: "14rem",
              zIndex: 0,
              transform: "scaleX(-1)",
              display: tree1,
            }}
          />
          <img
            src="/car.svg"
            alt=""
            style={{
              width: "12rem",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
          <img
            src="/car2.svg"
            alt=""
            style={{
              width: "12rem",
              display: car2,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
        </div>

        <div style={{ position: "relative", width: "12rem" }}>
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "1vh",
              right: "20%",
              width: "14rem",
              zIndex: 1,
              transform: "scaleX(-1)",
              display: tree2,
            }}
          />
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "1vh",
              left: "30%",
              width: "14rem",
              zIndex: 1,
              display: tree2,
            }}
          />
          <img
            src="/small house.svg"
            alt=""
            style={{
              width: "12rem",
              display: "block",
              position: "relative",
              zIndex: 2,
            }}
          />
          <img
            src="/small house2.svg"
            alt=""
            style={{
              width: "12rem",
              display: smallHouse2,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 3,
            }}
          />
        </div>

        <div style={{ position: "relative", width: "22rem" }}>
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "18vh",
              left: "30%",
              width: "14rem",
              zIndex: 0,
              transform: "scaleX(-1)",
              display: tree3,
            }}
          />
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "18vh",
              right: "30%",
              width: "14rem",
              zIndex: 0,
              display: tree3,
            }}
          />
          <img
            src="/big house.svg"
            alt=""
            style={{
              width: "22rem",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
          <img
            src="/big house2.svg"
            alt=""
            style={{
              width: "22rem",
              display: bigHouse2,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
        </div>

        <div style={{ position: "relative", width: "15rem" }}>
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "1vh",
              left: "50%",
              width: "14rem",
              zIndex: 0,
              display: tree4,
            }}
          />
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "14vh",
              right: "50%",
              width: "14rem",
              zIndex: 0,
              transform: "scaleX(-1)",
              display: tree4,
            }}
          />
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "1vh",
              right: "50%",
              width: "14rem",
              zIndex: 0,
              transform: "scaleX(-1)",
              display: tree4,
            }}
          />
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "35vh",
              right: "10%",
              width: "16rem",
              zIndex: 0,
              display: tree4,
            }}
          />
          <img
            src="/trees.svg"
            alt=""
            style={{
              position: "absolute",
              bottom: "25vh",
              left: "12%",
              width: "14rem",
              zIndex: 0,
              display: tree4,
            }}
          />
          <img
            src="/apartment.svg"
            alt=""
            style={{
              width: "15rem",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
          <img
            src="/apartment2.svg"
            alt=""
            style={{
              width: "15rem",
              display: apartment2,
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
            }}
          />
        </div>
      </div>
    </div>
  );
}