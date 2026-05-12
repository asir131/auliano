"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const reviewedGames = [
  {
    title: "Cyber Legends",
    rating: "4.8",
    reviews: "(2,847)",
    image: "game-cyber-legends.png",
  },
  {
    title: "Neon Streets",
    rating: "4.6",
    reviews: "(1,923)",
    image: "game-neon-streets.png",
  },
  {
    title: "Midnight Racer",
    rating: "4.7",
    reviews: "(3,201)",
    image: "game-midnight-racer.png",
  },
  {
    title: "Future City",
    rating: "4.9",
    reviews: "(4,156)",
    image: "game-future-city.png",
  },
  {
    title: "Tokyo Nights",
    rating: "4.5",
    reviews: "(1,567)",
    image: "game-tokyo-nights.png",
  },
  {
    title: "Solar Drift",
    rating: "4.4",
    reviews: "(1,284)",
    image: "game-midnight-racer.png",
  },
  {
    title: "Chrome District",
    rating: "4.8",
    reviews: "(2,119)",
    image: "game-neon-streets.png",
  },
  {
    title: "Shadow Protocol",
    rating: "4.6",
    reviews: "(1,742)",
    image: "game-cyber-legends.png",
  },
  {
    title: "Neon Horizon",
    rating: "4.9",
    reviews: "(3,604)",
    image: "game-future-city.png",
  },
];

export function ReviewedGamesSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.matchMedia("(min-width: 1280px)").matches) {
        setVisibleCount(5);
      } else if (window.matchMedia("(min-width: 1024px)").matches) {
        setVisibleCount(4);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setVisibleCount(3);
      } else if (window.matchMedia("(min-width: 640px)").matches) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const visibleGames = useMemo(
    () =>
      Array.from({ length: visibleCount }, (_, index) => {
        const gameIndex = (startIndex + index) % reviewedGames.length;
        return reviewedGames[gameIndex];
      }),
    [startIndex, visibleCount],
  );

  const showPrevious = () => {
    setStartIndex((current) => (current - 1 + reviewedGames.length) % reviewedGames.length);
  };

  const showNext = () => {
    setStartIndex((current) => (current + 1) % reviewedGames.length);
  };

  return (
    <section
      className="bg-[#080b1c] px-[100px] pt-3.5 pb-[50px] max-[1180px]:px-8 max-[760px]:px-6"
      data-node-id="1:196"
    >
      <div className="mx-auto w-[min(1240px,100%)]">
        <h2 className="m-0 text-center text-5xl leading-[1.3] font-semibold text-[#f0f0f5] max-[760px]:text-[34px]">
          JUST REVIEWED BY MEMBERS
        </h2>
        <div className="mt-[42px] grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {visibleGames.map((game) => (
            <article key={game.title}>
              <Image
                className="aspect-[230.66/307.55] w-full rounded-[14px] object-cover"
                src={`/figma/${game.image}`}
                alt={game.title}
                width={231}
                height={308}
              />
              <h3 className="mt-3 mb-0 text-lg leading-normal font-medium text-[#f0f0f5]">
                {game.title}
              </h3>
              <div className="flex items-center gap-2 text-sm leading-5 text-[#a0a0b0]">
                <Image src="/figma/star.svg" alt="" width={16} height={16} />
                <span>{game.rating}</span>
                <span>{game.reviews}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-[42px] flex justify-center gap-12" aria-label="Carousel controls">
          <button
            className="inline-flex size-[60px] cursor-pointer items-center justify-center rounded-full border-0 border-l-2 border-l-[#088bdc] bg-[#e6e6e6] shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.1)]"
            type="button"
            aria-label="Previous"
            onClick={showPrevious}
          >
            <Image src="/figma/arrow-left.svg" alt="" width={40} height={40} />
          </button>
          <button
            className="inline-flex size-[60px] cursor-pointer items-center justify-center rounded-full border-0 border-r-2 border-r-[#088bdc] bg-[#e6e6e6] shadow-[0_1px_1.5px_rgba(0,0,0,0.1),0_1px_1px_rgba(0,0,0,0.1)]"
            type="button"
            aria-label="Next"
            onClick={showNext}
          >
            <Image src="/figma/arrow-right.svg" alt="" width={40} height={40} />
          </button>
        </div>
      </div>
    </section>
  );
}
