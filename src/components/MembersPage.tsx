import Image from "next/image";
import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const members = [
  { avatar: "/figma-members/avatar-1.png", games: "439", followers: "1234", following: "89" },
  { avatar: "/figma-members/avatar-2.png", games: "567", followers: "892", following: "123" },
  { avatar: "/figma-members/avatar-2.png", games: "823", followers: "3456", following: "234" },
  { avatar: "/figma-members/avatar-3.png", games: "312", followers: "567", following: "45" },
  { avatar: "/figma-members/avatar-4.png", games: "421", followers: "789", following: "156" },
  { avatar: "/figma-members/avatar-3.png", games: "234", followers: "1890", following: "67" },
  { avatar: "/figma-members/avatar-3.png", games: "312", followers: "567", following: "45" },
  { avatar: "/figma-members/avatar-4.png", games: "421", followers: "789", following: "156" },
  { avatar: "/figma-members/avatar-3.png", games: "234", followers: "1890", following: "67" },
  { avatar: "/figma-members/avatar-3.png", games: "312", followers: "567", following: "45" },
  { avatar: "/figma-members/avatar-4.png", games: "421", followers: "789", following: "156" },
  { avatar: "/figma-members/avatar-3.png", games: "234", followers: "1890", following: "67" },
];

const footerColumns = [
  ["Platform", "Activity", "Library", "Members"],
  ["Resources", "Help Center", "Contact"],
  ["Legal", "Privacy Policy", "Terms of Service", "Cookie Policy"],
];

const socials = ["twitter", "instagram", "linkedin", "youtube"];

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path
        d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MemberCard({
  member,
}: {
  member: {
    avatar: string;
    games: string;
    followers: string;
    following: string;
  };
}) {
  const stats = [
    ["Games", member.games],
    ["Followers", member.followers],
    ["Following", member.following],
  ];

  return (
    <article className="flex min-h-[170px] flex-col gap-4 rounded-md border border-white/10 bg-[linear-gradient(180deg,rgba(46,167,255,0)_57.41%,rgba(46,167,255,0.1)_100%)] px-[25px] pt-[25px] pb-px">
      <div className="flex min-w-0 items-center gap-4">
        <Image
          className="size-16 shrink-0 rounded-full object-cover"
          src={member.avatar}
          alt=""
          width={64}
          height={64}
        />
        <div className="flex min-w-0 items-center gap-3.5 max-[430px]:flex-col max-[430px]:items-start max-[430px]:gap-2">
          <h2 className="m-0 truncate text-lg leading-[27px] font-medium text-white">@sarah_games</h2>
          <button
            className="rounded-lg bg-[#343537] px-4 py-1.5 text-center text-xs leading-4 font-bold tracking-[1.2px] text-[#e3e2e4] uppercase"
            type="button"
          >
            Follow
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {stats.map(([label, value]) => (
          <div className="text-center" key={label}>
            <p className="m-0 text-base leading-6 font-bold text-white">{value}</p>
            <p className="m-0 text-xs leading-4 tracking-[0.3px] text-[#9ab] uppercase">{label}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function MembersFooter() {
  return (
    <footer className="mt-[89px] bg-[#090525] px-[148px] pt-16 pb-6 max-[1180px]:px-12 max-[760px]:mt-20 max-[760px]:px-6">
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

export function MembersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b1c] font-sans text-white">
      <Navbar />

      <section className="mx-auto w-[min(1240px,calc(100%-64px))] pt-[220px] max-[760px]:w-[calc(100%-32px)] max-[760px]:pt-[180px]">
        <div>
          <h1 className="m-0 text-[40px] leading-[60px] font-bold text-[#f0f0f5] max-[760px]:text-[34px] max-[760px]:leading-[46px]">
            Members
          </h1>
          <p className="mt-2 mb-0 text-lg font-medium text-[#a0a0b0] max-[760px]:text-base">
            Active members in the Gamelog community
          </p>
        </div>

        <div className="mt-8 flex justify-end max-[760px]:justify-start">
          <label className="flex h-11 w-[470px] max-w-full items-center gap-2 rounded-[15px] border border-white/10 bg-[#1e1e32] px-4 py-3 text-[#7a7a7a]">
            <SearchIcon />
            <span className="sr-only">Search members</span>
            <input
              className="min-w-0 flex-1 bg-transparent text-xs leading-[1.5] text-[#f0f0f5] outline-none placeholder:text-[#7a7a7a]"
              placeholder="Search......."
              type="search"
            />
          </label>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6 max-[1040px]:grid-cols-2 max-[680px]:grid-cols-1">
          {members.map((member, index) => (
            <MemberCard member={member} key={`${member.avatar}-${index}`} />
          ))}
        </div>
      </section>

      <MembersFooter />
    </main>
  );
}
