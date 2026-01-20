import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Flip } from "gsap/dist/Flip";
import { cn } from "@/lib/utils";

gsap.registerPlugin(Flip);

interface WonJTextProps {
  text?: string[];
  textClassName?: string;
}

const WonJText = ({ text = ["educator", "coach", "mentor", "consultant"], textClassName = "" }: WonJTextProps) => {
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

    textRef.current?.addEventListener("click", () => {
      textTimeline.restart();
    });

    return () => {
      textRef.current?.classList.replace("items-start", "items-center");
      textRef.current?.removeEventListener("click", () => {
        textTimeline.restart();
      });
    };
  });

  return (
    <div ref={containerRef} className="hero-container relative w-full flex justify-center items-center overflow-hidden bg-gray-700 rounded-lg p-4 h-[200px] cursor-pointer">
      <div ref={textRef} className="hero w-full flex flex-col justify-center items-center text-4xl font-bold uppercase">
        {text.map((item) => (
          <h2 className={cn("block opacity-0", textClassName)} key={item}>{item}</h2>
        ))}
      </div>
    </div>
  );
};

export default WonJText;