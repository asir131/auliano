import Image from "next/image";
import Link from "next/link";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const filters = ["All", "RPG", "Action", "Racing", "Adventure"];

const games = [
  {
    title: "Cyber Legends",
    rating: "4.8",
    reviews: "2,847",
    image: "/figma-library/cyber-legends-1.png",
  },
  {
    title: "Neon Streets",
    rating: "4.6",
    reviews: "1,923",
    image: "/figma-library/neon-streets-1.png",
  },
  {
    title: "Midnight Racer",
    rating: "4.7",
    reviews: "3,201",
    image: "/figma-library/midnight-racer-1.png",
  },
  {
    title: "Future City",
    rating: "4.9",
    reviews: "4,156",
    image: "/figma-library/future-city-1.png",
  },
  {
    title: "Tokyo Nights",
    rating: "4.5",
    reviews: "1,567",
    image: "/figma/game-tokyo-nights.png",
  },
  {
    title: "Cyber Legends",
    rating: "4.8",
    reviews: "2,847",
    image: "/figma/game-cyber-legends.png",
  },
  {
    title: "Neon Streets",
    rating: "4.6",
    reviews: "1,923",
    image: "/figma-library/ghost-of-tsushima.png",
  },
  {
    title: "Midnight Racer",
    rating: "4.7",
    reviews: "3,201",
    image: "/figma/game-midnight-racer.png",
  },
  {
    title: "Future City",
    rating: "4.9",
    reviews: "4,156",
    image: "/figma-library/silent-hill.png",
  },
  {
    title: "Tokyo Nights",
    rating: "4.5",
    reviews: "1,567",
    image: "/figma-library/ghost-of-tsushima.png",
  },
  {
    title: "Cyber Legends",
    rating: "4.8",
    reviews: "2,847",
    image: "/figma-library/space-marine.png",
  },
  {
    title: "Neon Streets",
    rating: "4.6",
    reviews: "1,923",
    image: "/figma-library/dark-souls.png",
  },
  {
    title: "Midnight Racer",
    rating: "4.7",
    reviews: "3,201",
    image: "/figma-library/the-surge.png",
  },
  {
    title: "Future City",
    rating: "4.9",
    reviews: "4,156",
    image: "/figma-library/dark-souls.png",
  },
  {
    title: "Tokyo Nights",
    rating: "4.5",
    reviews: "1,567",
    image: "/figma-library/the-surge.png",
  },
];

const footerColumns = [
  ["Platform", "Activity", "Library", "Members"],
  ["Resources", "Help Center", "Contact"],
  ["Legal", "Privacy Policy", "Terms of Service", "Cookie Policy"],
];

const socials = ["twitter", "instagram", "linkedin", "youtube"];

function FilterIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="M3 4h10M5 8h6M7 12h2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path
        d="m11.3 11.3 2.2 2.2M7.25 12a4.75 4.75 0 1 1 0-9.5 4.75 4.75 0 0 1 0 9.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 3h4v4H3V3Zm6 0h4v4H9V3ZM3 9h4v4H3V9Zm6 0h4v4H9V9Z" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 16 16">
      <path d="M5 4h8M5 8h8M5 12h8M3 4h.01M3 8h.01M3 12h.01" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden="true" className="size-3.5" fill="#facc15" viewBox="0 0 16 16">
      <path d="m8 1.6 1.9 4 4.4.6-3.2 3.1.8 4.4L8 11.6l-3.9 2.1.8-4.4-3.2-3.1 4.4-.6L8 1.6Z" />
    </svg>
  );
}

function LibraryFooter() {
  return (
    <footer className="mt-[155px] bg-[#090525] px-[148px] pt-16 pb-6 max-[1180px]:px-12 max-[760px]:mt-20 max-[760px]:px-6">
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

function GameCard({
  game,
}: {
  game: {
    title: string;
    rating: string;
    reviews: string;
    image: string;
  };
}) {
  return (
    <Link
      className="block min-w-0 text-white no-underline"
      href="/library/elden-ring-shadow-of-the-erdtree"
    >
      <div className="relative aspect-[230/308] overflow-hidden rounded-[14px] bg-white/5">
        <Image className="object-cover" src={game.image} alt="" fill sizes="(max-width: 760px) 46vw, (max-width: 1180px) 30vw, 230px" />
      </div>
      <h3 className="mt-[13px] mb-0 truncate text-lg leading-normal font-medium text-[#f0f0f5]">
        {game.title}
      </h3>
      <div className="mt-1 flex items-center gap-2 text-sm leading-5 text-[#a0a0b0]">
        <StarIcon />
        <span>{game.rating}</span>
        <span>({game.reviews})</span>
      </div>
    </Link>
  );
}

export function LibraryPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b1c] font-sans text-white">
      <Navbar />

      <section className="mx-auto w-[min(1240px,calc(100%-64px))] pt-[220px] max-[760px]:w-[calc(100%-32px)] max-[760px]:pt-[180px]">
        <div>
          <h1 className="m-0 text-[40px] leading-[60px] font-bold text-[#f0f0f5] max-[760px]:text-[34px] max-[760px]:leading-[46px]">
            Game Library
          </h1>
          <p className="mt-2 mb-0 text-lg font-medium text-[#a0a0b0] max-[760px]:text-base">
            Discover and explore games
          </p>
        </div>

        <div className="mt-8 flex items-center justify-between gap-6 max-[900px]:flex-col max-[900px]:items-stretch">
          <div className="flex  max-w-full items-center rounded-2xl border border-white/10 bg-[rgba(20,20,35,0.4)] px-6 py-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="mr-1 flex items-center gap-2 text-base font-medium text-[#f0f0f5]">
                <FilterIcon />
                <span>Filters:</span>
              </div>
              {filters.map((filter) => (
                <button
                  className={`h-[38px] rounded-[10px] px-[17px] text-sm font-medium text-[#f0f0f5] transition ${
                    filter === "All"
                      ? "bg-[linear-gradient(142deg,#6366f1_0%,#8b5cf6_100%)]"
                      : "border border-white/10 bg-white/5 hover:bg-white/10"
                  }`}
                  key={filter}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 max-[900px]:justify-start">
            <label className="flex h-10 w-[243px] items-center gap-2 rounded-[10px] border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 text-[#a0a0b0]">
              <SearchIcon />
              <span className="sr-only">Search games</span>
              <input
                className="min-w-0 flex-1 bg-transparent text-xs text-[#f0f0f5] outline-none placeholder:text-[#a0a0b0]"
                placeholder="Search..."
                type="search"
              />
            </label>
            <button
              className="flex size-9 items-center justify-center rounded-lg bg-[linear-gradient(142deg,#6366f1_0%,#8b5cf6_100%)] text-white"
              type="button"
              aria-label="Grid view"
            >
              <GridIcon />
            </button>
            <button
              className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-[#a0a0b0]"
              type="button"
              aria-label="List view"
            >
              <ListIcon />
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-5 gap-x-6 gap-y-[39px] max-[1180px]:grid-cols-4 max-[900px]:grid-cols-3 max-[640px]:grid-cols-2 max-[380px]:grid-cols-1">
          {games.map((game, index) => (
            <GameCard game={game} key={`${game.title}-${index}`} />
          ))}
        </div>
      </section>

      <LibraryFooter />
    </main>
  );
}
