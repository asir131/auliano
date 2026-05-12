"use client";

import { useState } from "react";
import Image from "next/image";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const games = [
  {
    title: "Cyber Legends",
    rating: "4.8",
    reviews: "2,847",
    image: "/figma-profile/cyberpunk.png",
  },
  {
    title: "Neon Streets",
    rating: "4.6",
    reviews: "1,923",
    image: "/figma-profile/future-city.png",
  },
  {
    title: "Midnight Racer",
    rating: "4.7",
    reviews: "3,201",
    image: "/figma-profile/disco-elysium.png",
  },
  {
    title: "Future City",
    rating: "4.9",
    reviews: "4,156",
    image: "/figma-profile/future-city.png",
  },
  {
    title: "Tokyo Nights",
    rating: "4.5",
    reviews: "1,567",
    image: "/figma-profile/god-of-war.png",
  },
  {
    title: "Cyber Legends",
    rating: "4.8",
    reviews: "2,847",
    image: "/figma-profile/space-marine.png",
  },
  {
    title: "Neon Streets",
    rating: "4.6",
    reviews: "1,923",
    image: "/figma-profile/ghost-of-tsushima.png",
  },
  {
    title: "Midnight Racer",
    rating: "4.7",
    reviews: "3,201",
    image: "/figma-profile/silent-hill.png",
  },
  {
    title: "Future City",
    rating: "4.9",
    reviews: "4,156",
    image: "/figma-profile/dark-souls.png",
  },
  {
    title: "Tokyo Nights",
    rating: "4.5",
    reviews: "1,567",
    image: "/figma-profile/the-surge.png",
  },
];

const reviews = [
  {
    avatar: "/figma-profile/reviewer-1.png",
    name: "ALEXANDER WRIGHT",
    meta: "VETERAN EXPLORER - 120 HOURS",
    rating: 5,
    text: "The sheer scale of the verticality here makes the base game look flat. It is a punishing, rewarding, and hauntingly beautiful conclusion to a masterpiece.",
  },
  {
    avatar: "/figma-profile/reviewer-2.png",
    name: "ELENA ROSSI",
    meta: "LORE ENTHUSIAST - 45 HOURS",
    rating: 4,
    text: "Messmer is perhaps the most balanced and visually stunning boss FromSoftware has ever conceived. The lore revelations here recontextualize everything we knew about Marika.",
  },
];

const footerColumns = [
  ["Platform", "Activity", "Library", "Members"],
  ["Resources", "Help Center", "Contact"],
  ["Legal", "Privacy Policy", "Terms of Service", "Cookie Policy"],
];

const socials = ["twitter", "instagram", "linkedin", "youtube"];
const tabs = ["PROFILE", "REVIEWS", "WATCHLIST", "LIKES", "List", "NETWORK"];
const watchlistCovers = Array.from({ length: 15 }, (_, index) => {
  const coverNumber = String(index + 1).padStart(2, "0");

  return {
    image: `/figma-watchlist/cover-${coverNumber}.png`,
    title: `Watchlist game ${index + 1}`,
  };
});
const likedGames = [
  "Cyberpunk 2077",
  "Elden Ring",
  "Starfield",
  "Shadow Trial",
  "Hollow Knight",
  "The Last of Us",
  "Portal 2",
  "Skyrim",
  "Hades",
  "Bloodborne",
  "Psychonauts 2",
  "Firewatch",
  "Sable",
  "Inscryption",
  "Control",
  "The Witness",
].map((title, index) => {
  const coverNumber = String(index + 1).padStart(2, "0");

  return {
    image: `/figma-likes/like-${coverNumber}.png`,
    rating: index === 2 ? 4 : index === 9 ? 4 : 4.5,
    title,
  };
});

function StarIcon({ small = false, filled = true }: { small?: boolean; filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={small ? "size-2.5" : "size-3.5"}
      fill={filled ? "#facc15" : "#63636f"}
      viewBox="0 0 16 16"
    >
      <path d="m8 1.6 1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4-3.2-3.1 4.4-.6L8 1.6Z" />
    </svg>
  );
}

function GameCard({ game }: { game: (typeof games)[number] }) {
  return (
    <a className="block min-w-0 text-white no-underline" href="#">
      <div className="relative aspect-[230/308] overflow-hidden rounded-[14px] bg-white/5">
        <Image
          className="object-cover"
          src={game.image}
          alt=""
          fill
          sizes="(max-width: 760px) 46vw, (max-width: 1180px) 30vw, 230px"
        />
      </div>
      <h3 className="mt-[13px] mb-0 truncate text-lg leading-normal font-medium text-[#f0f0f5]">
        {game.title}
      </h3>
      <div className="mt-1 flex items-center gap-2 text-sm leading-5 text-[#a0a0b0]">
        <StarIcon />
        <span>{game.rating}</span>
        <span>({game.reviews})</span>
      </div>
    </a>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="rounded-lg border border-white/10 bg-[rgba(20,20,35,0.4)] p-8 max-[640px]:p-5">
      <div className="flex items-center gap-4 max-[640px]:items-start">
        <Image
          className="size-12 shrink-0 rounded-xl object-cover grayscale"
          src={review.avatar}
          alt=""
          width={48}
          height={48}
        />
        <div className="min-w-0">
          <h3 className="m-0 text-sm font-semibold text-[#e6e6e6]">{review.name}</h3>
          <p className="m-0 text-xs leading-[1.5] text-white">{review.meta}</p>
        </div>
        <div className="ml-auto flex gap-0.5 max-[640px]:hidden">
          {Array.from({ length: 5 }).map((_, index) => (
            <StarIcon filled={index < review.rating} key={index} small />
          ))}
        </div>
      </div>
      <p className="mt-4 mb-0 text-sm leading-[1.5] text-[#e6e6e6]">&quot;{review.text}&quot;</p>
    </article>
  );
}

function ProfileFooter() {
  return (
    <footer className="mt-28 bg-[#090525] px-[148px] pt-16 pb-6 max-[1180px]:px-12 max-[760px]:mt-20 max-[760px]:px-6">
      <div className="grid min-h-[172px] grid-cols-4 gap-12 max-[760px]:grid-cols-1">
        <div>
          <Logo />
          <p className="mt-5 mb-9 ml-1.5 w-61 text-sm leading-5 tracking-[0.07px] text-[#99a1af]">
            The #1 UK-only.............
          </p>
          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                className="inline-flex size-9 items-center justify-center rounded-[10px] bg-white/5 text-inherit no-underline"
                href="#"
                key={social}
                aria-label={social}
              >
                <Image src={`/figma/${social}.svg`} alt="" width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map(([heading, ...links]) => (
          <div className="flex flex-col gap-3" key={heading}>
            <h3 className="mt-0 mb-1 text-sm leading-5 font-medium tracking-[0.07px] text-white">
              {heading}
            </h3>
            {links.map((link) => (
              <a
                className="text-sm leading-5 tracking-[0.07px] text-[#99a1af] no-underline"
                href="#"
                key={link}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 text-sm leading-5 tracking-[0.07px] text-white max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-5">
        <p className="m-0">GAMELOG. GAME DATA FROM IGDB.</p>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Cookies"].map((link) => (
            <a className="text-inherit no-underline" href="#" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" className="size-2.5" fill="none" viewBox="0 0 10 6">
      <path d="m1 1 4 4 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg aria-hidden="true" className="h-[15px] w-[22px]" fill="none" viewBox="0 0 22 15">
      <path
        d="M11 1C6.72 1 3.06 3.58 1.5 7.23 3.06 10.88 6.72 13.46 11 13.46s7.94-2.58 9.5-6.23C18.94 3.58 15.28 1 11 1Z"
        stroke="#c8cacc"
        strokeWidth="1.2"
      />
      <path
        d="M11 10.25a3.02 3.02 0 1 0 0-6.04 3.02 3.02 0 0 0 0 6.04Z"
        stroke="#c8cacc"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" className="inline size-3 align-[-1px]" fill="none" viewBox="0 0 12 12">
      <path d="M6 1.5v9M1.5 6h9" stroke="#999" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke="#7a7a7a"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FilterButton({ label }: { label: string }) {
  return (
    <button
      className="inline-flex h-8 items-center gap-1 rounded bg-[#242526] px-[13px] text-sm leading-5 text-[#c7c6c8] uppercase transition-colors hover:bg-[#2d2e30]"
      type="button"
    >
      {label}
      <ChevronDownIcon />
    </button>
  );
}

function LikesFilter({ label, highlight }: { label: string; highlight?: string }) {
  return (
    <button
      className="inline-flex h-[15px] items-center gap-1 bg-transparent text-[10px] leading-[15px] font-black tracking-[1px] text-[#6b7280] uppercase transition-colors hover:text-[#9ca3af]"
      type="button"
    >
      {highlight ? (
        <span>
          {label} <span className="text-white">{highlight}</span>
        </span>
      ) : (
        label
      )}
      <ChevronDownIcon />
    </button>
  );
}

function GridIcon() {
  return (
    <svg aria-hidden="true" className="size-[13.5px]" fill="none" viewBox="0 0 14 14">
      <path d="M1 1h4v4H1V1ZM9 1h4v4H9V1ZM1 9h4v4H1V9ZM9 9h4v4H9V9Z" stroke="#9ca3af" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="size-2" fill="#ff4761" viewBox="0 0 12 12">
      <path d="M6 10.5S1.5 8 1.5 4.7A2.35 2.35 0 0 1 5.5 3L6 3.6 6.5 3a2.35 2.35 0 0 1 4 1.7C10.5 8 6 10.5 6 10.5Z" />
    </svg>
  );
}

function MiniStarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-2"
      fill={filled ? "#facc15" : "#4b5563"}
      viewBox="0 0 16 16"
    >
      <path d="m8 1.6 1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4-3.2-3.1 4.4-.6L8 1.6Z" />
    </svg>
  );
}

function LikedGameCard({ game }: { game: (typeof likedGames)[number] }) {
  return (
    <article className="min-w-0">
      <div className="relative aspect-[104/143] overflow-hidden rounded-[2px] border border-[#333] bg-[#242526] p-px">
        <Image
          className="object-cover"
          src={game.image}
          alt={game.title}
          fill
          sizes="(max-width: 420px) 48vw, (max-width: 760px) 31vw, (max-width: 1180px) 15vw, 110px"
        />
      </div>
      <div className="mt-1 flex items-center justify-between gap-1 px-1">
        <div className="flex min-w-0 items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <MiniStarIcon filled={index < Math.floor(game.rating)} key={index} />
          ))}
        </div>
        <HeartIcon />
      </div>
    </article>
  );
}

function ProfileContent() {
  return (
    <section className="mx-auto flex w-[min(1240px,calc(100%-64px))] flex-col gap-16 py-12 max-[760px]:w-[calc(100%-32px)]">
      <div className="grid grid-cols-5 gap-x-6 gap-y-[39px] max-[1180px]:grid-cols-4 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[380px]:grid-cols-1">
        {games.map((game, index) => (
          <GameCard game={game} key={`${game.title}-${index}`} />
        ))}
      </div>

      <div>
        <h2 className="m-0 mb-6 text-xs font-medium tracking-[2px] text-white uppercase">
          Recent Reviews
        </h2>
        <div className="flex flex-col gap-8">
          {reviews.map((review) => (
            <ReviewCard review={review} key={review.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WatchlistContent() {
  return (
    <section className="mx-auto w-[min(1240px,calc(100%-64px))] py-12 max-[760px]:w-[calc(100%-32px)]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 pt-2">
          <p className="m-0 text-base leading-6 tracking-[1.6px] text-[#e6e6e6] uppercase">
            You want to play 46 games
          </p>

          <div className="flex items-center justify-between gap-6 border-y border-[#333] py-[13px] max-[760px]:flex-col max-[760px]:items-start">
            <div className="flex flex-wrap items-center gap-3">
              <FilterButton label="Decade" />
              <FilterButton label="Genre" />
              <FilterButton label="Platform" />
            </div>

            <div className="flex flex-wrap items-center gap-4 max-[760px]:w-full max-[760px]:justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm leading-6 text-[#666] uppercase">Sort by</span>
                <FilterButton label="When added" />
              </div>
              <button className="text-[#c8cacc] transition-colors hover:text-white" type="button" aria-label="Toggle view">
                <EyeIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[minmax(0,668px)_minmax(280px,360px)] gap-12 max-[980px]:grid-cols-1">
          <div className="grid grid-cols-5 gap-3 max-[760px]:grid-cols-4 max-[560px]:grid-cols-3 max-[420px]:grid-cols-2">
            {watchlistCovers.map((cover) => (
              <article
                className="aspect-[2/3] overflow-hidden rounded border border-[#333] bg-white/5 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.35)]"
                key={cover.image}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={cover.image}
                  alt={cover.title}
                  width={160}
                  height={240}
                  sizes="(max-width: 420px) 42vw, (max-width: 760px) 22vw, 128px"
                />
              </article>
            ))}
          </div>

          <aside className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              {["Import games to watchlist...", "Export watchlist"].map((label) => (
                <button
                  className="h-[38px] rounded border border-[#333] px-[17px] text-left text-base leading-6 text-[#c8cacc] uppercase transition-colors hover:border-[#555] hover:bg-white/[0.03]"
                  key={label}
                  type="button"
                >
                  {label}
                </button>
              ))}
              <button
                className="h-[38px] rounded border border-[#333] px-[17px] text-left text-base leading-6 text-[#ff5c5c] uppercase opacity-60 transition-opacity hover:opacity-100"
                type="button"
              >
                Clear watchlist
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="m-0 border-b border-[#333] pb-[5px] text-base leading-6 tracking-[1.6px] text-[#666] uppercase">
                How to add
              </h2>
              <p className="m-0 max-w-[340px] text-base leading-6 text-[#999]">
                Hover over a game and click the <PlusIcon /> icon to add it to your watchlist. Use
                this to keep track of games you want to play in the future.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="m-0 border-b border-[#333] pb-[5px] text-base leading-6 tracking-[1.6px] text-[#666] uppercase">
                Add a game
              </h2>
              <label className="flex h-11 items-center gap-2 rounded-[15px] border border-white/10 bg-[#1e1e32] px-4">
                <SearchIcon />
                <input
                  className="min-w-0 flex-1 border-0 bg-transparent text-xs leading-[1.5] text-[#c8cacc] outline-none placeholder:text-[#7a7a7a]"
                  placeholder="Search game..."
                  type="search"
                />
              </label>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function LikesContent() {
  return (
    <section className="mx-auto w-[min(1240px,calc(100%-48px))] px-6 pt-8 pb-24 max-[760px]:w-full max-[760px]:px-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-end justify-between gap-6 pt-4 max-[900px]:flex-col max-[900px]:items-start">
          <div className="border-b-2 border-[#00c030] pb-1.5">
            <h2 className="m-0 text-base leading-6 font-normal text-white uppercase">Games</h2>
          </div>

          <div className="flex items-center gap-4 max-[900px]:w-full max-[900px]:flex-wrap">
            <div className="flex flex-wrap items-center gap-4 border-r border-[#333] pr-[17px] max-[640px]:border-r-0 max-[640px]:pr-0">
              <LikesFilter label="Rating" />
              <LikesFilter label="Decade" />
              <LikesFilter label="Genre" />
              <LikesFilter label="Platform" />
            </div>

            <div className="flex items-center gap-4">
              <LikesFilter label="Sort by" highlight="When liked" />
              <button className="text-[#9ca3af] transition-colors hover:text-white" type="button" aria-label="Toggle compact view">
                <EyeIcon />
              </button>
              <button className="text-[#9ca3af] transition-colors hover:text-white" type="button" aria-label="Toggle grid view">
                <GridIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-11 gap-[3px] max-[1180px]:grid-cols-8 max-[900px]:grid-cols-6 max-[680px]:grid-cols-4 max-[460px]:grid-cols-3 max-[360px]:grid-cols-2">
          {likedGames.map((game) => (
            <LikedGameCard game={game} key={game.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProfilePage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const activeContent =
    activeTab === "WATCHLIST" ? (
      <WatchlistContent />
    ) : activeTab === "LIKES" ? (
      <LikesContent />
    ) : (
      <ProfileContent />
    );

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b1c] pt-[160px] font-sans text-white max-[760px]:pt-[140px]">
      <Navbar />

      <section className="bg-[#080b1c] px-[100px] pt-12 pb-6 max-[1180px]:px-12 max-[760px]:px-6">
        <div className="mx-auto flex max-w-[1536px] flex-col gap-12 px-8 max-[760px]:px-0">
          <div className="flex items-end gap-8 max-[760px]:items-start max-[620px]:flex-col">
            <Image
              className="size-40 rounded-xl object-cover shadow-[0_0_0_4px_#121315] max-[620px]:size-32"
              src="/figma-profile/avatar.png"
              alt="Julian Black"
              width={160}
              height={160}
              priority
            />
            <div className="flex flex-1 flex-col gap-4 pb-2">
              <div className="flex items-center gap-4">
                <h1 className="m-0 text-[28px] font-semibold text-white">Julian Black</h1>
                <button
                  className="rounded-lg bg-[#343537] px-4 py-1.5 text-xs leading-4 font-bold tracking-[1.2px] text-[#e3e2e4] uppercase"
                  type="button"
                >
                  Follow
                </button>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="m-0 text-2xl font-semibold text-white">812</p>
                  <p className="m-0 text-sm font-medium text-[#c8cacc] uppercase">Following</p>
                </div>
                <div>
                  <p className="m-0 text-2xl font-semibold text-white">1.2K</p>
                  <p className="m-0 text-sm font-medium text-[#c8cacc] uppercase">Followers</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex gap-8 overflow-x-auto pb-4 text-sm font-medium text-white" aria-label="Profile sections">
            {tabs.map((tab) => (
              <button
                className={`shrink-0 border-b bg-transparent pb-1 transition-colors ${
                  activeTab === tab
                    ? "border-[#1d4ed8] text-white"
                    : "border-transparent text-[#e6e6e6] hover:text-white"
                }`}
                key={tab}
                onClick={() => setActiveTab(tab)}
                type="button"
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {activeContent}

      <ProfileFooter />
    </main>
  );
}
