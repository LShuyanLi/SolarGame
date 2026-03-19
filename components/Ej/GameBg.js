"use client";

import Image from "next/image";
import gameBg from "./IconImages/background.svg";

export default function GameBg() {
  return (
    <Image
      src={gameBg}
      alt="Game Background"
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center 2.5rem",
        zIndex: 0,
      }}
      priority
    />
  );
}