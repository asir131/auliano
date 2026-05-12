"use client";

import Image from "next/image";
import { useState } from "react";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const activities = [
  {
    user: "alex_gamer",
    action: "reviewed",
    time: "2 hours ago",
    avatar: "/figma-activity/avatar-alex.png",
    game: "Cyber Legends",
    cover: "/figma/game-cyber-legends.png",
    rating: 5,
    text: "Absolutely incredible experience! The cyberpunk atmosphere is unmatched. Best game I've played this year.",
    media: [],
    video: true,
  },
  {
    user: "sarah_plays",
    action: "played",
    time: "5 hours ago",
    avatar: "/figma-activity/avatar-sarah.png",
    game: "Neon Streets",
    cover: "/figma/game-neon-streets.png",
    rating: 4,
    text: "Just finished this amazing level! The neon aesthetic is stunning.",
    media: [
      "/figma-activity/post-1.png",
      "/figma-activity/post-2.png",
      "/figma-activity/post-2.png",
    ],
  },
  {
    user: "neon_drivers",
    action: "shared a video about",
    time: "8 hours ago",
    avatar: "/figma-activity/avatar-neon.png",
    game: "Midnight Racer",
    cover: "/figma/game-midnight-racer.png",
    rating: 5,
    text: "Check out this insane drift combo I pulled off! The racing mechanics are smooth, graphics are stunning.",
    media: [],
    video: true,
  },
  {
    user: "emma_vr",
    action: "shared",
    time: "12 hours ago",
    avatar: "/figma-activity/avatar-emma.png",
    game: "Future City",
    cover: "/figma-library/future-city-1.png",
    rating: 0,
    text: "My gaming setup is finally complete! Ready for marathon sessions.",
    media: [
      "/figma-activity/post-3.png",
      "/figma-activity/post-4.png",
      "/figma-activity/post-5.png",
    ],
  },
  {
    user: "john_fps",
    action: "reviewed",
    time: "1 day ago",
    avatar: "/figma-activity/avatar-john.png",
    game: "Tokyo Nights",
    cover: "/figma/game-tokyo-nights.png",
    rating: 4,
    text: "Great atmosphere and story. Some pacing issues but overall a solid experience.",
    media: [],
  },
];

const footerColumns = [
  ["Platform", "Activity", "Library", "Members"],
  ["Resources", "Help Center", "Contact"],
  ["Legal", "Privacy Policy", "Terms of Service", "Cookie Policy"],
];

const socials = ["twitter", "instagram", "linkedin", "youtube"];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg aria-hidden="true" className="size-5" fill={filled ? "#facc15" : "#63636f"} viewBox="0 0 16 16">
      <path d="m8 1.6 1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4-3.2-3.1 4.4-.6L8 1.6Z" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M10 17s-6-3.7-6-8.2A3.4 3.4 0 0 1 10 6.6a3.4 3.4 0 0 1 6 2.2C16 13.3 10 17 10 17Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M4 5.5A3.5 3.5 0 0 1 7.5 2h5A3.5 3.5 0 0 1 16 5.5v3A3.5 3.5 0 0 1 12.5 12H9l-4 4v-4.5A3.5 3.5 0 0 1 4 9V5.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M6 3h8a1 1 0 0 1 1 1v13l-5-3-5 3V4a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="m17.5 17.5-3.8-3.8M15.8 8.8a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M4 3.5h12A1.5 1.5 0 0 1 17.5 5v10A1.5 1.5 0 0 1 16 16.5H4A1.5 1.5 0 0 1 2.5 15V5A1.5 1.5 0 0 1 4 3.5Zm.5 10 3.1-3.1 2.2 2.2 1.8-1.8 3.9 3.9M7.2 7.2h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M3.5 6A1.5 1.5 0 0 1 5 4.5h7A1.5 1.5 0 0 1 13.5 6v8A1.5 1.5 0 0 1 12 15.5H5A1.5 1.5 0 0 1 3.5 14V6Zm10 2.4 3-1.8v6.8l-3-1.8"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ShareModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
    >
      <div className="max-h-[calc(100vh-48px)] w-[672px] max-w-full overflow-y-auto rounded-2xl border border-white/10 bg-[rgba(15,15,25,0.95)] px-8 pt-8 pb-px shadow-[0_24px_80px_rgba(0,0,0,0.45)] max-[560px]:px-5 max-[560px]:pt-6">
        <div className="flex h-10 items-center justify-between">
          <h2 id="share-modal-title" className="m-0 text-2xl leading-8 font-bold text-[#f0f0f5]">
            Share to Feed
          </h2>
          <button
            className="flex size-10 items-center justify-center rounded-[10px] text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            type="button"
            aria-label="Close share modal"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>

        <form className="mt-6 flex flex-col gap-6">
          <label className="flex flex-col gap-3">
            <span className="text-base leading-6 font-medium text-[#f0f0f5]">Select Game</span>
            <span className="flex h-[50px] items-center gap-2 rounded-[10px] border border-white/10 bg-[rgba(30,30,50,0.6)] px-[17px] py-[13px] text-[#a0a0b0]">
              <SearchIcon />
              <input
                className="min-w-0 flex-1 bg-transparent text-base leading-6 font-medium text-[#f0f0f5] outline-none placeholder:text-[#a0a0b0]"
                placeholder="Search for a game..."
                type="search"
              />
            </span>
          </label>

          <div className="flex flex-col gap-3">
            <p className="m-0 text-base leading-6 font-medium text-[#f0f0f5]">Rating (Optional)</p>
            <div className="flex h-8 items-center gap-2 text-[#202034]">
              {Array.from({ length: 5 }).map((_, index) => (
                <button className="transition hover:scale-110 hover:text-[#facc15]" type="button" aria-label={`Rate ${index + 1} star`} key={index}>
                  <StarIcon filled={false} />
                </button>
              ))}
            </div>
          </div>

          <label className="flex flex-col gap-3">
            <span className="text-base leading-6 font-medium text-[#f0f0f5]">What&apos;s on your mind?</span>
            <textarea
              className="h-[122px] resize-none rounded-[10px] border border-white/10 bg-[rgba(30,30,50,0.6)] px-4 py-3 text-base leading-6 text-[#f0f0f5] outline-none placeholder:text-[#a0a0b0] focus:border-white/25"
              placeholder="Share your thoughts, progress, or achievements..."
            />
          </label>

          <div className="flex flex-col gap-3">
            <p className="m-0 text-base leading-6 font-medium text-[#f0f0f5]">Add Media (Optional)</p>
            <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
              <button
                className="flex h-[50px] items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-[rgba(30,30,50,0.6)] text-base leading-6 font-medium text-[#f0f0f5] transition hover:border-white/25 hover:bg-[rgba(42,42,68,0.75)]"
                type="button"
              >
                <ImageIcon />
                Upload Images
              </button>
              <button
                className="flex h-[50px] items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-[rgba(30,30,50,0.6)] text-base leading-6 font-medium text-[#f0f0f5] transition hover:border-white/25 hover:bg-[rgba(42,42,68,0.75)]"
                type="button"
              >
                <VideoIcon />
                Upload Video
              </button>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-white/10" />
              <span className="text-sm leading-5 text-[#a0a0b0]">or</span>
              <span className="h-px flex-1 bg-white/10" />
            </div>
            <input
              className="h-[50px] rounded-[10px] border border-white/10 bg-[rgba(30,30,50,0.6)] px-4 py-3 text-base text-[#f0f0f5] outline-none placeholder:text-[#a0a0b0] focus:border-white/25"
              placeholder="Paste video URL (YouTube, Twitch, etc.)"
              type="url"
            />
          </div>

          <div className="flex gap-3 pt-4 max-[560px]:flex-col">
            <button
              className="h-12 min-w-0 flex-1 rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] text-[15px] leading-6 font-bold tracking-[0.2565px] text-white transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(0,117,248,0.38)]"
              type="submit"
            >
              Share
            </button>
            <button
              className="h-[50px] w-[98px] rounded-[10px] border border-white/10 bg-white/5 text-base leading-6 font-medium text-[#f0f0f5] transition hover:bg-white/10 max-[560px]:w-full"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ActivityCard({ activity }: { activity: (typeof activities)[number] }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[rgba(20,20,35,0.4)] px-[25px] pt-[25px] pb-px">
      <div className="flex gap-4">
        <Image
          className="size-[50px] shrink-0 rounded-full object-cover"
          src={activity.avatar}
          alt=""
          width={50}
          height={50}
        />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 text-base leading-6">
            <span className="font-medium text-[#f0f0f5]">{activity.user}</span>
            <span className="text-[#a0a0b0]">{activity.action}</span>
          </div>
          <p className="m-0 text-sm leading-5 text-[#a0a0b0]">{activity.time}</p>
        </div>
      </div>

      <div className="mt-4 flex gap-4 max-[620px]:flex-col">
        <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-[10px] bg-white/5 max-[620px]:h-52 max-[620px]:w-full">
          <Image className="object-cover" src={activity.cover} alt="" fill sizes="(max-width: 620px) 100vw, 96px" />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="m-0 text-xl leading-7 font-medium text-[#f0f0f5]">{activity.game}</h2>
          {activity.rating > 0 ? (
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <StarIcon filled={index < activity.rating} key={index} />
              ))}
            </div>
          ) : null}
          <p className="mt-3 max-w-[574px] text-base leading-6 text-[#a0a0b0]">{activity.text}</p>
        </div>
      </div>

      {activity.video ? (
        <div className="mt-4 h-[150px] rounded-[14px] bg-black max-[620px]:h-36" />
      ) : null}

      {activity.media.length > 0 ? (
        <div className="mt-4 grid grid-cols-3 gap-2 max-[700px]:grid-cols-2 max-[430px]:grid-cols-1">
          {activity.media.map((image, index) => (
            <div className="relative h-64 overflow-hidden rounded-[14px] bg-black max-[700px]:h-48" key={`${image}-${index}`}>
              <Image className="object-cover" src={image} alt="" fill sizes="(max-width: 700px) 50vw, 339px" />
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-4 border-t border-white/10 py-[17px]">
        <div className="flex items-center justify-between text-[#f0f0f5]">
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-sm leading-5 font-medium" type="button">
              <HeartIcon />
              <span>234</span>
            </button>
            <button className="flex items-center gap-2 text-sm leading-5 font-medium" type="button">
              <CommentIcon />
              <span>47</span>
            </button>
          </div>
          <button className="flex items-center justify-center" type="button" aria-label="Save post">
            <BookmarkIcon />
          </button>
        </div>
      </div>
    </article>
  );
}

function ActivityFooter() {
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
        <p className="m-0">© GAMELOG. GAME DATA FROM IGDB.</p>
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

export function ActivityPage() {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b1c] font-sans text-white">
      <Navbar />

      <section className="mx-auto w-[min(1240px,calc(100%-64px))] pt-[220px] max-[760px]:w-[calc(100%-32px)] max-[760px]:pt-[180px]">
        <div className="flex items-start justify-between gap-6 max-[620px]:flex-col">
          <div>
            <h1 className="m-0 text-[40px] leading-[60px] font-bold text-[#f0f0f5] max-[760px]:text-[34px] max-[760px]:leading-[46px]">
              Activity Feed
            </h1>
            <p className="mt-2 mb-0 text-base leading-6 text-[#a0a0b0]">
              See what your community is playing
            </p>
          </div>
          <button
            className="mt-1 h-12 w-[162px] rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] text-[15px] leading-6 font-bold tracking-[0.2565px] text-white transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_12px_28px_rgba(0,117,248,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-[620px]:mt-0"
            type="button"
            onClick={() => setIsShareOpen(true)}
          >
            Share
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-6">
          {activities.map((activity) => (
            <ActivityCard activity={activity} key={`${activity.user}-${activity.game}`} />
          ))}
        </div>
      </section>

      <ActivityFooter />
      {isShareOpen ? <ShareModal onClose={() => setIsShareOpen(false)} /> : null}
    </main>
  );
}
