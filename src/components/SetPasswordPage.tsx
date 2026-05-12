"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function SetPasswordPage() {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);

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
          <div className="ml-[76px] flex w-[568px] flex-col items-start gap-12 pt-[179px] max-[1320px]:mx-auto max-[1320px]:w-[min(568px,calc(100%-56px))] max-[1320px]:px-0 max-[900px]:pt-16 max-[900px]:pb-20">
            <div className="flex w-full flex-col items-start gap-2">
              <h1 className="m-0 w-full font-['Inter',sans-serif] text-[32px] leading-normal font-semibold text-[#e6e6e6]">
                Set Password
              </h1>
              <p className="m-0 font-['Inter',sans-serif] text-[18px] leading-7 font-medium tracking-[0.09px] text-[#c8cacc]">
                Enter your new password
              </p>
            </div>

            <div className="flex w-full items-center gap-[23px]" aria-hidden="true">
              <span className="h-0.5 min-w-px flex-1 bg-[#c8cacc]" />
              <span className="font-['Satoshi',sans-serif] text-[18px] leading-7 font-medium tracking-[0.09px] text-[#c8cacc]">
                OR
              </span>
              <span className="h-0.5 min-w-px flex-1 bg-[#c8cacc]" />
            </div>

            <form className="flex w-full flex-col items-center gap-6" action="/">
              <div className="flex w-full flex-col gap-[18px]">
                <label className="flex w-full flex-col gap-1.5">
                  <span className="font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#e6e6e6]">
                    New Password
                  </span>
                  <input
                    className="h-[52px] w-full rounded-lg border border-[#e9eef4] bg-[#f6fafd] px-4 py-3 font-['Satoshi',sans-serif] text-[16px] leading-6 tracking-[0.08px] text-[#333] placeholder:text-[#b8b8c9] focus:outline-2 focus:outline-offset-2 focus:outline-[#0075f8]"
                    name="password"
                    type="password"
                    placeholder="New password"
                    autoComplete="new-password"
                  />
                </label>

                <div className="flex w-full flex-col items-end gap-2">
                  <label className="flex w-full flex-col gap-1.5">
                    <span className="font-['Satoshi',sans-serif] text-[20px] leading-7 font-medium tracking-[0.1px] text-[#e6e6e6]">
                      Confirm Password
                    </span>
                    <span className="flex h-[52px] w-full items-center rounded-lg border border-[#e9eef4] bg-[#f6fafd] px-4 py-3 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#0075f8]">
                      <input
                        className="min-w-0 flex-1 bg-transparent font-['Satoshi',sans-serif] text-[16px] leading-6 tracking-[0.08px] text-[#333] placeholder:text-[#b8b8c9] outline-none"
                        name="confirmPassword"
                        type={isConfirmVisible ? "text" : "password"}
                        placeholder="Confirm password"
                        autoComplete="new-password"
                      />
                      <button
                        className="grid size-6 shrink-0 place-items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0075f8]"
                        type="button"
                        aria-label={isConfirmVisible ? "Hide confirm password" : "Show confirm password"}
                        aria-pressed={isConfirmVisible}
                        onClick={() => setIsConfirmVisible((current) => !current)}
                      >
                        <Image
                          className={isConfirmVisible ? "size-6 opacity-70" : "size-6"}
                          src="/figma-login/eye-slash.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      </button>
                    </span>
                  </label>
                  
                </div>
              </div>

              <Link
                className="flex h-[52px] w-full items-center justify-center rounded-lg border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-6 py-3 font-['Public_Sans','Public Sans',sans-serif] text-[15px] leading-6 font-bold tracking-[0.2565px] text-white transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffffff]"
                href="/"
              >
                Set New Password
              </Link>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
