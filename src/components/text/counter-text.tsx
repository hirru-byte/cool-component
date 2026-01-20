import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "@/utils/registerEffect";
import { useRef } from "react";

const CounterText = () => {
  const counterRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const textTimeline = gsap.timeline();
    textTimeline.counter("#coursesCount", { end: 1, ease: "linear" }, "-=0.5")
    textTimeline.counter("#studentsCount", { end: 220, increment: 5, duration: 0.6 }, "-=0.5")
    textTimeline.counter("#hoursCount", { end: 18651, increment: 100, duration: 5 }, "-=0.5")

    counterRef.current?.addEventListener("click", () => {
      textTimeline.restart();
    });

    return () => {
      counterRef.current?.removeEventListener("click", () => {
        textTimeline.restart();
      });
    };
  });


  return (
    <div ref={counterRef} className="counter-text text-2xl font-bold uppercase flex flex-col gap-2 items-center justify-center h-[200px] bg-gray-700 rounded-lg p-4 cursor-pointer">
      <p><span id="coursesCount">10</span> course</p>
      <p><span id="studentsCount">100</span> students</p>
      <p><span id="hoursCount">1,000</span> hours</p>
    </div>
  )
}

export default CounterText;