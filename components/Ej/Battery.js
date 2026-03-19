"use client";

import Image from "next/image";
import battery0 from "./IconImages/battery-0.png";
import battery25 from "./IconImages/battery-25.png";
import battery50 from "./IconImages/battery-50.png";
import battery75 from "./IconImages/battery-75.png";
import battery100 from "./IconImages/battery-100.png";

function getBatteryImage(chargePercent) {
    if (chargePercent >= 100) return battery100;
    if (chargePercent >= 75) return battery75;
    if (chargePercent >= 50) return battery50;
    if (chargePercent >= 25) return battery25;
    return battery0;
}

export default function Battery({ chargePercent = 0 }) {
    const clampedCharge = Math.min(100, Math.max(0, chargePercent));

    return (
        <div style={{
            position: "fixed",
            bottom: 70,
            left: 20,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <Image
                src={getBatteryImage(clampedCharge)}
                alt={`Battery ${clampedCharge}%`}
                width={100}
                height={110}
                style={{ objectFit: "contain" }}
            />
            <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 13,
                fontWeight: 700,
                color: "#2db52d",
                marginTop: 4,
            }}>
                {clampedCharge}%
            </div>
        </div>
    );
}