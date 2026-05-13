import Image from "next/image";

const steps = [
  {
    title: "Find Your Next Game",
    copy: "Explore trending titles and discover games tailored to your taste.",
    icon: "how-game.svg",
    edge: "top",
  },
  {
    title: "Track Your Progress",
    copy: "Log the games you play, rate them, and build your personal library.",
    icon: "how-track.svg",
    edge: "bottom",
  },
  {
    title: "Share Your Experience",
    copy: "Write reviews, connect with gamers, and join the conversation.",
    icon: "how-share.svg",
    edge: "top",
  },
];

export function HowItWorksSection() {
  return (
    <section
      className="scroll-mt-28 flex flex-col items-center gap-20 bg-[#080b1c] px-20 py-[50px] max-[760px]:gap-10 max-[760px]:px-6"
      data-node-id="1:267"
      id="how-it-works"
    >
      <h2 className="m-0 text-center text-5xl leading-[1.3] font-semibold text-[#fefefe] max-[760px]:text-[34px]">
        How it work
      </h2>
      <div className="grid w-[min(1269px,100%)] grid-cols-3 gap-10 max-[1180px]:max-w-[560px] max-[1180px]:grid-cols-1">
        {steps.map((step) => {
          const edgeClass =
            step.edge === "bottom"
              ? "border-b-[3px] border-b-[#026dff]"
              : "border-t-[3px] border-t-[#026dff]";

          return (
            <article
              className={`flex min-h-56 flex-col items-center gap-4 overflow-hidden rounded-3xl border-solid bg-[linear-gradient(180deg,rgba(46,167,255,0)_57.41%,rgba(46,167,255,0.1)_100%)] p-[34px] shadow-[0_0_0_rgba(0,123,215,0)] transition-[transform,box-shadow,background] duration-500 ease-out hover:-translate-y-1.5 hover:bg-[linear-gradient(180deg,rgba(46,167,255,0.08)_0%,rgba(46,167,255,0.22)_100%)] hover:shadow-[0_18px_46px_rgba(0,123,215,0.28),0_0_34px_rgba(46,167,255,0.22),inset_0_0_28px_rgba(46,167,255,0.12)] ${edgeClass}`}
              key={step.title}
            >
              <Image src={`/figma/${step.icon}`} alt="" width={36} height={36} />
              <h3 className="m-0 text-center text-2xl leading-[1.1] font-semibold">
                {step.title}
              </h3>
              <p className="mt-[18px] mb-0 w-[min(339px,100%)] text-center text-xl leading-[1.08] text-[#e6f3f3] max-[760px]:text-[17px]">
                {step.copy}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
