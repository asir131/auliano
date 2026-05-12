"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function GoogleLogo() {
  return (
    <span className="relative block size-6 shrink-0 overflow-hidden" aria-hidden="true">
      <Image
        className="absolute inset-[42.03%_6.25%_16.85%_50.9%]"
        src="/figma-login/google-1.svg"
        alt=""
        width={11}
        height={10}
      />
      <Image
        className="absolute inset-[58.65%_19.55%_6.25%_11.01%]"
        src="/figma-login/google-2.svg"
        alt=""
        width={17}
        height={8}
      />
      <Image
        className="absolute inset-[30.15%_74.5%_30.36%_6.26%]"
        src="/figma-login/google-3.svg"
        alt=""
        width={5}
        height={10}
      />
      <Image
        className="absolute inset-[6.25%_19.25%_58.65%_11.01%]"
        src="/figma-login/google-4.svg"
        alt=""
        width={17}
        height={8}
      />
    </span>
  );
}

type PasswordFieldProps = {
  autoComplete: string;
  label: string;
  name: string;
  placeholder: string;
};

function PasswordField({ autoComplete, label, name, placeholder }: PasswordFieldProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <label className="flex w-full flex-col gap-1.5">
      <span className="font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#e6e6e6]">
        {label}
      </span>
      <span className="flex h-[52px] w-full items-center rounded-lg border border-[#e9eef4] bg-[#f6fafd] px-4 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#0075f8]">
        <input
          className="min-w-0 flex-1 bg-transparent font-['Satoshi',sans-serif] text-[16px] leading-6 tracking-[0.08px] text-[#333] placeholder:text-[#b8b8c9] outline-none"
          name={name}
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <button
          className="grid size-6 shrink-0 place-items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075f8]"
          type="button"
          aria-label={isVisible ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`}
          aria-pressed={isVisible}
          onClick={() => setIsVisible((current) => !current)}
        >
          <Image
            className={isVisible ? "size-6 opacity-70" : "size-6"}
            src="/figma-login/eye-slash.svg"
            alt=""
            width={24}
            height={24}
          />
        </button>
      </span>
    </label>
  );
}

export function CreateAccountPage() {
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

        <section className="relative min-h-[1024px] overflow-hidden bg-[#090525] max-[900px]:min-h-auto">
          <div className="ml-[76px] flex w-[568px] flex-col items-start gap-12 pt-[132px] max-[1320px]:mx-auto max-[1320px]:w-[min(568px,calc(100%-56px))] max-[1320px]:px-0 max-[900px]:pt-16 max-[900px]:pb-20">
            <h1 className="m-0 font-['Inter',sans-serif] text-[32px] leading-none font-semibold text-white">
              Create Account
            </h1>

            <button
              className="flex h-16 w-full items-center justify-center gap-4 rounded-[40px] border border-[#333] bg-white font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#333] transition hover:bg-[#f6fafd] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0075f8]"
              type="button"
            >
              <GoogleLogo />
              <span>Continue with Google</span>
            </button>

            <div className="flex w-full items-center gap-[23px]" aria-hidden="true">
              <span className="h-0.5 min-w-px flex-1 bg-[#c8cacc]" />
              <span className="font-['Satoshi',sans-serif] text-[18px] leading-7 font-medium tracking-[0.09px] text-[#c8cacc]">
                OR
              </span>
              <span className="h-0.5 min-w-px flex-1 bg-[#c8cacc]" />
            </div>

            <form className="flex w-full flex-col items-center gap-6" action="/verification">
              <div className="flex w-full flex-col gap-[18px]">
                <label className="flex w-full flex-col gap-1.5">
                  <span className="font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#e6e6e6]">
                    Your email address
                  </span>
                  <input
                    className="h-[52px] w-full rounded-lg border border-[#e9eef4] bg-[#f6fafd] px-4 py-3 font-['Satoshi',sans-serif] text-[16px] leading-6 tracking-[0.08px] text-[#333] placeholder:text-[#b8b8c9] focus:outline-2 focus:outline-offset-2 focus:outline-[#0075f8]"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    autoComplete="email"
                  />
                </label>

                <PasswordField
                  autoComplete="new-password"
                  label="Your password"
                  name="password"
                  placeholder="Your password"
                />

                <PasswordField
                  autoComplete="new-password"
                  label="Confirm password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
              </div>

              <Link
                className="flex h-[52px] w-full items-center justify-center rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 py-3 font-['Public_Sans','Public Sans',sans-serif] text-[15px] leading-6 font-bold tracking-[0.2565px] text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffffff]"
                href="/verification"
              >
                Sign Up
              </Link>

              <p className="m-0 p-0.5 font-['Satoshi',sans-serif] text-[16px] leading-6 tracking-[0.08px] text-[#e6e6e6]">
                Already have an account?{" "}
                <Link className="font-medium underline" href="/">
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
