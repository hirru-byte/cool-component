import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { GSDevTools } from "gsap/GSDevTools";
import { Flip } from "gsap/dist/Flip";

gsap.registerPlugin(GSDevTools, Flip);

const WonJText = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {

    if (!textRef.current) return;

    const textHero = gsap.utils.toArray(".hero h2");
    if (!textHero || textHero.length === 0) return;

    const duration = 0.75;
    const textTimeline = gsap.timeline({ id: "text-timeline" });

    gsap.set(textRef.current, {
      yPercent: 100,
    });

    textHero.forEach((text) => {
      textTimeline.set(text as unknown as gsap.TweenTarget, {
        opacity: 1,
      });
      textTimeline.from(text as unknown as gsap.TweenTarget, {
        duration: duration,
        yPercent: 120,
        scale: 0.6,
        ease: "power3"
      });

      textTimeline.to(textRef.current, {
        yPercent: "-=25",
        duration: duration,
        ease: "power2"
      }, "<")
    });

    textTimeline.progress(1)

    const state = Flip.getState(".hero, h2");
    textRef.current.classList.toggle("items-start");
    const tween = Flip.from(state, {
      duration: 1,
      ease: "power2",
    });

    textTimeline.add(tween);
    textTimeline.restart();

    GSDevTools.create({ container: ".hero-content", animation: textTimeline })

    return () => {
      textRef.current?.classList.replace("items-start", "items-center");
    };
  });

  return (
    <div ref={containerRef} className="hero-container relative w-full flex justify-center items-center overflow-hidden bg-gray-700 rounded-lg p-4 pb-20 h-[300px]">
      <div className="hero-content w-full h-full absolute top-0 left-0"></div>
      <div ref={textRef} className="hero w-full flex flex-col justify-center items-center text-4xl font-bold uppercase">
        <h2 className="block opacity-0">educator</h2>
        <h2 className="block opacity-0">coach</h2>
        <h2 className="block opacity-0">mentor</h2>
        <h2 className="block opacity-0">consultant</h2>
      </div>
    </div>
  );
};

export default WonJText;