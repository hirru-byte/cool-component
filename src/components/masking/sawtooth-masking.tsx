"use client";
import Image from "next/image";
import bgSample from "../../../public/background/bg-sample.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SawtoothMasking = () => {
  useGSAP(() => {
    gsap.to(".bars-mask", {
      width: "100%",
      duration: 1,
      ease: "power2.inOut",
    });
  });

  return (
    <div className="relative w-full h-[500px]">
      <Image
        src={bgSample}
        alt="Background Sample"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Inline SVG for clipPath - this is the best approach for clipPath definitions */}
      <svg width="0" height="0" viewBox="0 0 1 1" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id="barsClip" clipPathUnits="objectBoundingBox">
            <rect x="0.00" y="0" width="0.05" height="1" />
            <rect x="0.05" y="0" width="0.05" height="1" />
            <rect x="0.10" y="0" width="0.05" height="1" />
            <rect x="0.15" y="0" width="0.05" height="1" />
            <rect x="0.20" y="0" width="0.05" height="1" />
            <rect x="0.25" y="0" width="0.05" height="1" />
            <rect x="0.30" y="0" width="0.05" height="1" />
            <rect x="0.35" y="0" width="0.05" height="1" />
            <rect x="0.40" y="0" width="0.05" height="1" />
            <rect x="0.45" y="0" width="0.05" height="1" />
            <rect x="0.50" y="0" width="0.05" height="1" />
            <rect x="0.55" y="0" width="0.05" height="1" />
            <rect x="0.60" y="0" width="0.05" height="1" />
            <rect x="0.65" y="0" width="0.05" height="1" />
            <rect x="0.70" y="0" width="0.05" height="1" />
            <rect x="0.75" y="0" width="0.05" height="1" />
            <rect x="0.80" y="0" width="0.05" height="1" />
            <rect x="0.85" y="0" width="0.05" height="1" />
            <rect x="0.90" y="0" width="0.05" height="1" />
            <rect x="0.95" y="0" width="0.05" height="1" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="bars-mask absolute inset-0 bg-zinc-900 dark:bg-zinc-100"
        style={{ clipPath: "url(#barsClip)" }}
      />
    </div>
  );
};

export default SawtoothMasking;