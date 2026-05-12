import Image from "next/image";
import { Logo } from "./Logo";

const footerColumns = [
  ["Platform", "Home", "Reviews", "How it work"],
  ["Resources", "Help Center", "Contact"],
  ["Legal", "Privacy Policy", "Terms of Service", "Cookie Policy"],
];

const socials = ["twitter", "instagram", "linkedin", "youtube"];

export function Footer() {
  return (
    <footer
      className="min-h-[417px] bg-[#090525] px-[148px] pt-16 max-[1180px]:px-12 max-[760px]:px-6 max-[760px]:pt-12 max-[760px]:pb-6"
      data-node-id="1:300"
    >
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
          <a className="text-inherit no-underline" href="#">
            Privacy
          </a>
          <a className="text-inherit no-underline" href="#">
            Terms
          </a>
          <a className="text-inherit no-underline" href="#">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
