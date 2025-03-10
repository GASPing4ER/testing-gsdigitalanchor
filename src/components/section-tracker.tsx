"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

type SectionTimelineProps = {
  sections: { id: number; name: string }[];
};

export default function SectionTimeline({ sections }: SectionTimelineProps) {
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((_, index) => {
        const section = document.getElementById(
          `${sections[index].name.toLowerCase()}`
        );
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  useEffect(() => {
    gsap.to(".dot", {
      duration: 0.3,
      scale: (i) => (i === activeIndex ? 1.2 : 1),
      backgroundColor: (i) => (i === activeIndex ? "black" : "gray"),
    });

    gsap.fromTo(
      `.label-${activeIndex}`,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0, duration: 0.3 }
    );
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    const section = document.getElementById(sections[index].name.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-1/2 -translate-y-1/2 right-10 flex flex-col items-center">
      {sections.map((section, index) => (
        <div key={section.id} className="flex flex-col items-center relative">
          {/* Line before dot (except first one) */}
          {index !== 0 && <div className="w-[2px] h-6 bg-gray-400"></div>}

          {/* Dot and Label */}
          <div className="flex items-center gap-2">
            {activeIndex === index && (
              <span
                className={`absolute right-6 px-2 py-1 text-sm bg-black text-white rounded-md label-${index}`}
              >
                {section.name}
              </span>
            )}
            <div
              ref={(el) => {
                timelineRefs.current[index] = el;
              }}
              className="dot w-3 h-3 rounded-full bg-gray-400 transition-all cursor-pointer"
              onClick={() => handleDotClick(index)} // Add onClick to the dot
            ></div>
          </div>

          {/* Line after dot (except last one) */}
          {index !== sections.length - 1 && (
            <div className="w-[2px] h-6 bg-gray-400"></div>
          )}
        </div>
      ))}
    </div>
  );
}
