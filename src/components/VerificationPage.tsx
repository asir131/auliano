import Image from "next/image";
import Link from "next/link";

const codeDigits = Array.from({ length: 6 }, (_, index) => index);

export function VerificationPage() {
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
          <div className="flex w-[590px] max-w-full flex-col items-center gap-6">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-center gap-6">
                <div className="flex w-full flex-col items-center gap-10">
                  <div className="flex w-[394px] max-w-full flex-col items-center">
                    <div className="flex w-full flex-col items-center gap-2 text-center">
                      <h1 className="m-0 w-full font-['Inter',sans-serif] text-[32px] leading-none font-semibold text-[#e6e6e6]">
                        Enter Verification Code
                      </h1>
                      <p className="m-0 w-full font-['Inter',sans-serif] text-[14px] leading-none font-normal text-[#c8cacc]">
                        We&rsquo;ve sent a 6-digit code to j***@gmail.com
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex w-full items-center justify-between gap-3"
                    aria-label="Verification code"
                  >
                    {codeDigits.map((digit) => (
                      <input
                        key={digit}
                        className="size-11 rounded-lg border border-[#c8cacc] bg-transparent text-center font-['Inter',sans-serif] text-[18px] font-semibold text-[#e6e6e6] outline-none focus:border-[#1d4ed8] focus:ring-2 focus:ring-[#1d4ed8]/40"
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        aria-label={`Digit ${digit + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <button
                  className="font-['Inter',sans-serif] text-[14px] leading-none font-semibold text-[#c8cacc]"
                  type="button"
                >
                  Paste Code
                </button>
              </div>

              <Link
                className="flex h-[52px] w-full items-center justify-center rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 py-3 font-['Public_Sans','Public Sans',sans-serif] text-[15px] leading-6 font-bold tracking-[0.2565px] text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffffff]"
                href="/home"
              >
                Verify
              </Link>
            </div>

            <div className="flex w-[224px] flex-col items-center gap-2 text-center opacity-80">
              <div className="flex w-full items-center justify-center gap-1 whitespace-nowrap font-['Inter',sans-serif] text-[14px] leading-none font-normal">
                <p className="m-0 text-[#e6e6e6]">Didn&rsquo;t receive the code?</p>
                <button className="text-[#1d4ed8]" type="button">
                  Resend
                </button>
              </div>
              <Link
                className="w-full font-['Inter',sans-serif] text-[16px] leading-none font-semibold text-[#e6e6e6]"
                href="/"
              >
                Back to Login
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
