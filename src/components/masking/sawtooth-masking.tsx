"use client";
import Image from "next/image";
import bgSample from "../../../public/background/bg-sample.webp";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);

const SawtoothMasking = () => {
  const barsMaskRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const barClip = barsMaskRef.current?.querySelector("#barsClip");
    if (!barClip) return;

    gsap.set(barClip.querySelectorAll("rect"), {
      transformOrigin: gsap.utils.wrap(['50% 60%', '50% 40%']),
      scaleY: 0,
      y: gsap.utils.wrap([-0.1, 0.1])
    });

    const barTimeline = gsap.timeline()

    barTimeline.to(barClip.querySelectorAll("rect"), {
      scaleY: 1,
      duration: 1,
      ease: "sine.inOut",
      stagger: {
        each: 0.01,
        from: "center",
        ease: "none"
      }
    })

    barTimeline.to(barClip.querySelectorAll("rect"), {
      y: 0,
      duration: 1,
      ease: "power4.in",
      stagger: {
        each: 0.01,
        from: "center",
        ease: "power4.in"
      }
    }, 0)

    barTimeline.to(".hero-image", {
      scale: 1.4,
      duration: barTimeline.duration()
    }, 0)

    GSDevTools.create({ animations: barTimeline, name: "Sawtooth Masking", color: "blue", width: "100%", height: "100%", showPanel: true, showVariables: true });
  });

  return (
    <div ref={barsMaskRef} className="relative w-full h-[500px] overflow-hidden bg-[#18222e] rounded-lg">

      {/* Inline SVG for clipPath - this is the best approach for clipPath definitions */}
      <svg width="0" height="0" viewBox="0 0 1 1" aria-hidden="true" >
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

      {/* <div className="absolute inset-0 h-px top-1/2 transform -translate-y-1/2 bg-red-500 dark:bg-blue-500 z-30" /> */}

      <div
        className="bars-mask w-full h-full bg-cover bg-center z-20"
        style={{
          clipPath: "url(#barsClip)",
          backgroundImage: "url(/background/bg-sample.webp)"
        }}
      />
    </div>
  );
};

export default SawtoothMasking;