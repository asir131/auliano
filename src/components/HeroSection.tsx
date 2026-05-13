import Image from "next/image";
import { AppButton } from "./AppButton";
import { Navbar } from "./Navbar";

const hotImages = ["hot-1.png", "hot-2.png", "hot-3.png", "hot-4.png", "hot-2.png"];

export function HeroSection() {
  return (
    <section
      className="relative min-h-[888px] overflow-hidden bg-white max-[760px]:min-h-[820px]"
      data-node-id="1:163"
    >
      <Image
        className="absolute inset-0 h-full w-full max-w-none object-cover object-center xl:top-1/2 xl:right-auto xl:bottom-auto xl:left-0 xl:h-[902px] xl:w-screen xl:-translate-y-[50.7%]"
        src="/figma/hero.png"
        alt=""
        width={1797}
        height={902}
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(129deg,rgba(58,9,9,0.4)_0%,rgba(0,0,0,0.4)_99%)]" />
      <div className="absolute right-0 bottom-[-364px] left-0 h-[794px] bg-[linear-gradient(180deg,rgba(8,11,28,0)_0%,rgba(8,11,28,0.96)_48%,#080b1c_100%)] blur-[42px]" />

      <Navbar />

      <div className="relative z-20 mx-auto w-[min(1206px,calc(100%-96px))] pt-[258px] max-[760px]:w-[calc(100%-48px)] max-[760px]:pt-[210px]">
        <h1 className="m-0 w-[min(744px,100%)] text-[76px] leading-none font-semibold max-[760px]:text-[46px] max-[760px]:leading-[1.05]">
          Track Your Games, Share Your Journey!
        </h1>
        <p className="mt-6 mb-0 text-[32px] leading-[1.15] font-medium max-[760px]:text-[22px]">
          Connect with gamers and discover what to play next.
        </p>
        <div className="mt-8 flex gap-4 max-[760px]:flex-wrap">
          <AppButton>Get Started</AppButton>
          <AppButton variant="secondary">Explore Games</AppButton>
        </div>
      </div>

      <div
  className="relative z-20 mx-auto mt-12 grid w-[calc(100%-48px)] grid-cols-2 justify-items-center  pb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:absolute xl:right-[150px] gap-6 xl:gap-0 xl:bottom-[57px] xl:left-[150px] xl:mx-0 xl:mt-0 xl:w-auto xl:grid-cols-[repeat(5,268px)] xl:justify-around xl:pb-0 max-[1180px]:overflow-x-auto max-[1180px]:pb-1.5 px-6"
  aria-label="Featured games"
>
        {hotImages.map((image, index) => (
          <Image
            className="h-[136px] w-[256px] rounded-[5px] object-cover"
            key={`${image}-${index}`}
            src={`/figma/${image}`}
            alt=""
            width={256}
            height={136}
          />
        ))}
      </div>
    </section>
  );
}
