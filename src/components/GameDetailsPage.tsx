"use client";

import Image from "next/image";
import { useState } from "react";
import { Navbar } from "./Navbar";

const stats = [
  { label: "Players", value: "1.2M" },
  { label: "Reviews", value: "840K" },
  { label: "Likes", value: "45k" },
  { label: "RPG 2024", value: "#1" },
];

const meta = [
  { label: "Developer", value: "FromSoftware" },
  { label: "Publisher", value: "Bandai Namco" },
  { label: "Release Date", value: "June 21, 2024" },
];

const reviews = [
  {
    avatar: "/figma-game-detail/avatar-alex.png",
    name: "alex_gamer",
    likes: "234",
    text: "Absolutely incredible experience! The cyberpunk atmosphere is unmatched. Every choice feels meaningful, and the city truly feels alive. The neon-lit streets, rain-soaked alleyways, and towering megacorporation buildings create an immersive world that rivals the best in the genre.",
    time: "2 days ago",
  },
  {
    avatar: "/figma-game-detail/avatar-gaming.png",
    name: "gaming_critic",
    likes: "145",
    text: "Great game with minor flaws. The story is engaging and the graphics are stunning. Some technical issues at launch but overall a solid experience.",
    time: "5 days ago",
  },
  {
    avatar: "/figma-game-detail/avatar-rpg.png",
    name: "rpg_master",
    likes: "389",
    text: "Best RPG of the year. The character development system is deep and rewarding. Spent over 100 hours and still finding new content.",
    time: "1 week ago",
  },
];

function StarIcon({ muted = false }: { muted?: boolean }) {
  return (
    <svg aria-hidden="true" className="size-4" fill={muted ? "#58616d" : "#facc15"} viewBox="0 0 16 16">
      <path d="m8 1.6 1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4-3.2-3.1 4.4-.6L8 1.6Z" />
    </svg>
  );
}

function OutlineStarIcon() {
  return (
    <svg aria-hidden="true" className="size-10" fill="none" viewBox="0 0 40 40">
      <path
        d="m20 4.83 4.37 8.85 9.77 1.42-7.07 6.9 1.67 9.73L20 27.13l-8.74 4.6L12.93 22l-7.07-6.9 9.77-1.42L20 4.83Z"
        stroke="#24263a"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" stroke="#f0f0f5" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="8" fill="white" />
      <path d="M10 6.5v7M6.5 10h7" stroke="#1d4ed8" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" className="h-[15px] w-[22px]" fill="none" viewBox="0 0 22 15">
      <path
        d="M11 1C6.72 1 3.06 3.58 1.5 7.23 3.06 10.88 6.72 13.46 11 13.46s7.94-2.58 9.5-6.23C18.94 3.58 15.28 1 11 1Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M11 10.25a3.02 3.02 0 1 0 0-6.04 3.02 3.02 0 0 0 0 6.04Z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="#ef4444" viewBox="0 0 16 16">
      <path d="M8 13.8S2 10.45 2 5.95A3.13 3.13 0 0 1 7.33 3.7L8 4.5l.67-.8A3.13 3.13 0 0 1 14 5.95c0 4.5-6 7.85-6 7.85Z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v3.9a2.25 2.25 0 0 1-2.25 2.25H7.2L4 13v-2.85A2.24 2.24 0 0 1 3 8.28V4.25Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
    </svg>
  );
}

function RatingStars({ small = false }: { small?: boolean }) {
  return (
    <div className={`flex items-center ${small ? "gap-0.5" : "gap-1"}`}>
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon />
      <StarIcon muted />
    </div>
  );
}

function ActionSidebar() {
  return (
    <aside className="w-full max-w-[390px] rounded-lg border-l-4 border-[#005ff8] bg-[rgba(27,28,30,0.8)] px-8 py-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[12px] max-[980px]:max-w-none max-[560px]:px-5">
      <div>
        <p className="m-0 text-[10px] leading-[15px] font-bold tracking-[1px] text-[#bccbb5] uppercase">
          Community Rating
        </p>
        <div className="mt-3 flex items-center gap-1">
          <RatingStars />
          <span className="ml-4 text-2xl leading-9 font-medium text-[#e3e2e4]">4.8</span>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 text-[15px] leading-6 font-bold tracking-[0.26px] text-white" type="button">
          <PlusCircleIcon />
          LOG EXPEDITION
        </button>
        <button className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[#292a2c] text-base leading-6 font-bold text-[#e3e2e4]" type="button">
          <EyeIcon />
          WATCHLIST
        </button>
        <button className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-[#3d4a39] text-base leading-6 font-bold text-[#ef4444]" type="button">
          <HeartIcon />
          LIKE
        </button>
      </div>
    </aside>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="rounded-[14px] border border-white/10 bg-[rgba(20,20,35,0.4)] px-6 py-6 max-[560px]:px-4">
      <div className="flex gap-4">
        <Image
          className="size-12 shrink-0 rounded-full object-cover"
          src={review.avatar}
          alt=""
          width={48}
          height={48}
        />
        <div className="min-w-0 flex-1">
          <p className="m-0 text-base leading-6 font-medium text-[#f0f0f5]">{review.name}</p>
          <div className="mt-1 flex flex-wrap items-center gap-2">
            <RatingStars small />
            <span className="text-sm leading-5 text-[#a0a0b0]">{review.time}</span>
          </div>
        </div>
      </div>
      <p className="mt-4 mb-0 text-base leading-6 text-[#a0a0b0]">{review.text}</p>
      <div className="mt-4 flex items-center gap-4 text-sm leading-5 font-medium text-[#f0f0f5]">
        <button className="inline-flex items-center gap-2" type="button">
          <HeartIcon />
          {review.likes}
        </button>
        <button className="inline-flex items-center gap-2" type="button">
          <MessageIcon />
          Reply
        </button>
      </div>
    </article>
  );
}

function ReviewModal({ onClose }: { onClose: () => void }) {
  const tags = [
    "Story-Rich",
    "Great Graphics",
    "Challenging",
    "Multiplayer",
    "Atmospheric",
    "Replayable",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-modal-title"
    >
      <div className="max-h-[calc(100vh-48px)] w-full max-w-[672px] overflow-y-auto rounded-2xl border border-white/10 bg-[rgba(15,15,25,0.95)] px-8 pt-8 pb-px shadow-[0_24px_80px_rgba(0,0,0,0.45)] max-[560px]:px-5 max-[560px]:pt-6">
        <div className="flex h-10 items-center justify-between gap-4">
          <h2
            className="m-0 min-w-0 text-2xl leading-8 font-bold text-[#f0f0f5] max-[560px]:text-xl"
            id="review-modal-title"
          >
            Review Shadow of the Erdtree
          </h2>
          <button
            className="flex size-10 shrink-0 items-center justify-center rounded-[10px] transition-colors hover:bg-white/5"
            onClick={onClose}
            type="button"
            aria-label="Close review modal"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="m-0 text-base leading-6 font-medium text-[#f0f0f5]">Rating</p>
            <div className="flex h-10 items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <button
                  className="flex size-10 items-center justify-center"
                  key={index}
                  type="button"
                  aria-label={`Rate ${index + 1} stars`}
                >
                  <OutlineStarIcon />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label
              className="text-base leading-6 font-medium text-[#f0f0f5]"
              htmlFor="review-text"
            >
              Your Review
            </label>
            <textarea
              className="h-[170px] resize-none rounded-[10px] border border-white/10 bg-[rgba(30,30,50,0.6)] px-4 py-3 text-base leading-6 text-[#f0f0f5] outline-none placeholder:text-[#a0a0b0] focus:border-[#1d4ed8]"
              id="review-text"
              placeholder="Share your thoughts about this game..."
            />
            <p className="m-0 text-sm leading-5 text-[#a0a0b0]">0 characters</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="m-0 text-base leading-6 font-medium text-[#f0f0f5]">Tags (up to 5)</p>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {tags.map((tag) => (
                <button
                  className="h-[30px] rounded-full border border-white/10 bg-white/[0.05] px-[13px] text-sm leading-5 font-medium text-[#f0f0f5] transition-colors hover:bg-white/10"
                  key={tag}
                  type="button"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4 pb-8 max-[560px]:flex-col">
            <button
              className="h-12 flex-1 rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 text-[15px] leading-6 font-bold tracking-[0.26px] text-white transition-opacity hover:opacity-95"
              type="button"
            >
              Publish Review
            </button>
            <button
              className="h-[50px] rounded-[10px] border border-white/10 bg-white/[0.05] px-6 text-base leading-6 font-medium text-[#f0f0f5] transition-colors hover:bg-white/10 max-[560px]:h-12"
              onClick={onClose}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GameDetailsPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b1c] font-sans text-white">
      <Navbar />

      <section className="relative flex min-h-[870px] items-end overflow-hidden max-[980px]:min-h-[980px] max-[560px]:min-h-[880px]">
        <Image
          className="object-cover opacity-60"
          src="/figma-game-detail/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121315] via-[rgba(18,19,21,0)] to-[rgba(18,19,21,0)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(18,19,21,0.8)] via-[rgba(18,19,21,0)] to-[rgba(18,19,21,0)]" />

        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-12 items-end gap-8 px-6 pb-12 max-[980px]:grid-cols-1 max-[760px]:pb-10">
          <div className="col-span-8">
            <h1 className="m-0 max-w-[760px] text-[76px] leading-none font-normal text-[#e3e2e4] max-[980px]:text-[58px] max-[560px]:text-[42px]">
              Elden Ring:<br />
              Shadow of the<br />
              Erdtree
            </h1>
            <div className="mt-6 flex flex-wrap gap-8">
              {meta.map((item) => (
                <div key={item.label}>
                  <p className="m-0 text-xs leading-5 tracking-[0.7px] text-[#e6e6e6]/60 uppercase">
                    {item.label}
                  </p>
                  <p className="m-0 text-sm leading-5 font-semibold tracking-[0.7px] text-[#e6e6e6] uppercase">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-4 flex justify-end max-[980px]:justify-start">
            <ActionSidebar />
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-6 py-12">
        <div className="grid grid-cols-4 gap-4 max-[760px]:grid-cols-2 max-[420px]:grid-cols-1">
          {stats.map((stat) => (
            <div
              className="rounded bg-gradient-to-b from-[rgba(46,167,255,0)] to-[rgba(46,167,255,0.1)] p-6 text-center"
              key={stat.label}
            >
              <p className="m-0 text-2xl leading-9 font-medium text-[#1d4ed8]">{stat.value}</p>
              <p className="m-0 text-sm font-medium text-[#e6e6e6] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-16 max-[980px]:grid-cols-1">
          <article className="col-span-8 max-w-[760px]">
            <h2 className="m-0 text-xl leading-7 font-semibold text-[#f0f0f5]">The Land of Shadow</h2>
            <div className="mt-6 flex flex-col gap-5 text-base leading-6 text-[#a0a0b0]">
              <p className="m-0">
                In the Land of Shadow, Miquella awaits the return of his promised Lord. Guided by Empyrean Miquella, players are beckoned to the Land of Shadow, a place obscured by the Erdtree where the goddess Marika first set foot.
              </p>
              <p className="m-0">
                In these strange new lands, players discover the dark secrets of the world as they meet others who follow in Miquella&apos;s footsteps with ulterior motives. Shadow of the Erdtree features an entirely new world for players to explore, larger than many full-scale open-world titles, filled with daunting bosses, intricate dungeons, and an expanded arsenal of weapons and magic.
              </p>
              <p className="m-0">
                The expansion represents the pinnacle of FromSoftware&apos;s architectural design: asymmetrical, vertical, and terrifyingly beautiful. It demands not just skill, but a deep reverence for the lore hidden in its obsidian towers and scorched plains.
              </p>
            </div>
          </article>
        </div>

        <section>
          <div className="flex items-center justify-between gap-5">
            <h2 className="m-0 text-xl leading-7 font-semibold text-[#f0f0f5]">Community Reviews</h2>
            <button
              className="h-10 rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 text-[15px] leading-6 font-bold tracking-[0.26px] whitespace-nowrap text-white max-[560px]:h-8 max-[560px]:px-2.5 max-[560px]:text-[10px] max-[560px]:leading-4"
              onClick={() => setIsReviewModalOpen(true)}
              type="button"
            >
              Write Review
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </section>
      </section>

      {isReviewModalOpen ? <ReviewModal onClose={() => setIsReviewModalOpen(false)} /> : null}
    </main>
  );
}
