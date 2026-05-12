import { AppButton } from "./AppButton";

export function CTASection() {
  return (
    <section
      className="flex min-h-[470px] flex-col items-center justify-center bg-[#080b1c] px-6 py-[70px] text-center"
      data-node-id="1:290"
    >
      <h2 className="m-0 text-5xl leading-[1.15] font-semibold max-[760px]:text-[34px]">
        Ready to level up your
        <br />
        gaming?
      </h2>
      <p className="mt-3 mb-9 text-xl text-[#e6e6e6]">
        Join thousands of gamers tracking their journey
      </p>
      <AppButton>Get Started</AppButton>
    </section>
  );
}
