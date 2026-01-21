"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const defaultCardContents: {
  content: React.ReactNode;
  className: string;
}[] = [
    {
      content: <p key="card-1">Card 1</p>,
      className: "bg-green-200",
    },
    {
      content: <p key="card-2">Card 2</p>,
      className: "bg-blue-200",
    },
    {
      content: <p key="card-3">Card 3</p>,
      className: "bg-red-200",
    },
  ];

interface CardData {
  element: HTMLElement | null;
  animation: GSAPTimeline | null;
}

interface ExpandCardProps {
  cardContents?: {
    content: React.ReactNode;
    className: string;
  }[];
  containerClassName?: string;
}

const ExpandCard = ({ cardContents = defaultCardContents, containerClassName = "" }: ExpandCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let activeCard: CardData = {
      element: null,
      animation: null,
    }
    const expandCard = gsap.utils.toArray(".expand-card") as HTMLElement[];
    if (!expandCard || expandCard.length === 0) return;

    expandCard.forEach((card: HTMLElement) => {
      const cardData = {
        element: card,
        animation: null as GSAPTimeline | null,
      }
      const closeButton = card.querySelector(".close-button");
      const cardContent = card.querySelector(".expand-card-content");
      const cardTimeline = gsap.timeline({ paused: true });

      cardTimeline.to(card, {
        width: "300px",
        duration: 0.4,
      }).to(closeButton, { opacity: 1, scale: 1, duration: 0.1, x: "+=10" }, "-=0.1")
        .to(cardContent, { opacity: 1, duration: 0.4 }, "-=0.4");

      cardData.animation = cardTimeline;

      card.addEventListener("click", () => {
        if (activeCard.element) {
          activeCard.animation?.reverse();
        }
        cardData.animation?.play();

        activeCard = cardData;
      });

      closeButton?.addEventListener("click", (e) => {
        e.stopPropagation();
        cardTimeline.reverse();
      });

      return () => {
        card.removeEventListener("click", () => {
          cardTimeline.play();
        });
      };
    });
  })

  return (
    <div ref={cardRef} className={cn("flex gap-4 p-4 justify-center items-center", containerClassName)}>
      {cardContents.map((content, index) => (
        <div key={index} className={cn("expand-card w-[50px] h-[200px] rounded-lg relative cursor-pointer hover:opacity-80 transition-opacity duration-300", content?.className)}>
          <div className="expand-card-content opacity-0 flex justify-center items-center h-full text-2xl font-bold text-gray-700">
            {content.content}
          </div>
          <div className="close-button opacity-0 absolute w-[32px] aspect-square flex items-center justify-center top-2 right-5 rounded-full bg-white/80 text-gray-700 hover:bg-white/90 cursor-pointer">X</div>
        </div>
      ))}

    </div>
  );
};

export default ExpandCard;