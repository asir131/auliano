import Image from "next/image";
import Link from "next/link";

export function ForgotPasswordPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#090525] text-white">
      <div className="mx-auto grid min-h-screen w-full max-w-[1440px] grid-cols-2 max-[900px]:grid-cols-1">
        <section className="relative min-h-[1024px] overflow-hidden bg-[#080b1c] max-[900px]:min-h-[52vh]">
          <Image
            className="absolute top-0 left-[-6px] h-[1024px] w-[864px] max-w-none object-cover object-[50%_50%] max-[900px]:left-1/2 max-[900px]:h-full max-[900px]:w-full max-[900px]:-translate-x-1/2 max-[900px]:object-contain"
            src="/figma-login/playlog-art.png"
            alt="PLAYLOG game controller logo"
            width={864}
            height={1024}
            priority
          />
        </section>

        <section className="relative flex min-h-[1024px] items-center justify-center overflow-hidden bg-[#090525] px-[65px] py-[316px] max-[900px]:min-h-auto max-[900px]:px-7 max-[900px]:py-20">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full flex-col items-start gap-3 px-4 py-6 text-center">
              <h1 className="m-0 w-full font-['Inter',sans-serif] text-[32px] leading-none font-semibold text-[#e6e6e6]">
                Forgot Password
              </h1>
              <p className="m-0 w-full font-['Inter',sans-serif] text-[20px] leading-none font-medium text-[#c8cacc]">
                Please enter your email address to reset your password.
              </p>
            </div>

            <div className="flex w-[568px] max-w-full items-center gap-[23px]" aria-hidden="true">
              <span className="h-0.5 min-w-px flex-1 bg-[#c8cacc]" />
              <span className="font-['Satoshi',sans-serif] text-[18px] leading-7 font-medium tracking-[0.09px] text-[#c8cacc]">
                OR
              </span>
              <span className="h-0.5 min-w-px flex-1 bg-[#c8cacc]" />
            </div>

            <form className="flex w-full flex-col items-center gap-6" action="/set-password">
              <label className="flex w-[590px] max-w-full flex-col items-start gap-2">
                <span className="font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#e6e6e6]">
                  Enter your E-mail
                </span>
                <span className="flex h-12 w-full items-center gap-3 rounded-lg border border-[#e0e0e0] bg-white px-4 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#0075f8]">
                  <Image
                    className="size-6 shrink-0"
                    src="/figma-login/sms.svg"
                    alt=""
                    width={24}
                    height={24}
                  />
                  <input
                    className="min-w-0 flex-1 bg-transparent font-['Satoshi',sans-serif] text-[16px] leading-6 tracking-[0.08px] text-[#454f5b] placeholder:text-[#454f5b] outline-none"
                    name="email"
                    type="email"
                    placeholder="Enter your E-mail"
                    autoComplete="email"
                  />
                </span>
              </label>

              <Link
                className="flex h-[52px] w-full items-center justify-center rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 py-3 font-['Public_Sans','Public Sans',sans-serif] text-[15px] leading-6 font-bold tracking-[0.2565px] text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffffff]"
                href="/set-password"
              >
                Reset Password
              </Link>
            </form>

            <p className="m-0 w-[590px] max-w-full text-center font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#e6e6e6]">
              Didn&rsquo;t receive the code?{" "}
              <button className="font-medium" type="button">
                Resend
              </button>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
