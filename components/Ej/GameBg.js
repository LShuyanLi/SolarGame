"use client";

import Image from "next/image";
import gameBg from "./IconImages/GameBg.png";

export default function GameBg() {
    return (
        <Image
            src={gameBg}
            alt="Game Background"
            fill
            style={{ objectFit: "cover", zIndex: 0 }}
            priority
        />
    );
}