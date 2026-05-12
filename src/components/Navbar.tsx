"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import { Logo } from "./Logo";

const navLinks = ["Home", "Reviews", "How it work"];
const authedNavLinks = [
  { href: "/activity", label: "Activity" },
  { href: "/library", label: "Library" },
  { href: "/members", label: "Members" },
];
const authStorageKey = "auliano-auth";

function getAuthSnapshot() {
  return window.localStorage.getItem(authStorageKey) === "logged-in";
}

function getServerAuthSnapshot() {
  return false;
}

function subscribeToAuthUpdates(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener("auliano-auth-change", onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener("auliano-auth-change", onStoreChange);
  };
}

function BellIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-6"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2 17.2a3.2 3.2 0 0 1-6.4 0M18.5 10.4v3.2l1.4 2.4a.8.8 0 0 1-.7 1.2H4.8a.8.8 0 0 1-.7-1.2l1.4-2.4v-3.2a6.5 6.5 0 0 1 13 0Z"
        stroke="#1d4ed8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

export function Navbar() {
  const isLoggedIn = useSyncExternalStore(
    subscribeToAuthUpdates,
    getAuthSnapshot,
    getServerAuthSnapshot,
  );

  if (isLoggedIn) {
    return (
      <header
        className="absolute top-3 left-1/2 z-30 flex w-[min(1317px,calc(100%-28px))] -translate-x-1/2 flex-col items-start rounded-[24px] bg-[rgba(4,4,4,0.15)] px-6 py-4 shadow-[0_4px_18.4px_rgba(0,0,0,0.6)]"
        data-node-id="267:5343"
      >
        <div className="flex w-full items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-8 text-base font-medium text-white max-[760px]:hidden" aria-label="Authenticated navigation">
            {authedNavLinks.map((link) => (
              <Link className="text-inherit no-underline" href={link.href} key={link.label}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-[23px] max-[760px]:hidden">
            <button
              className="relative flex size-12 items-center justify-center rounded-full bg-white text-[#1d4ed8] shadow-[0_12px_24px_rgba(0,0,0,0.28)] transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              type="button"
              aria-label="Notifications"
            >
              <BellIcon />
              <span className="absolute -top-0.5 right-0 flex size-5 items-center justify-center rounded-full bg-[#1d4ed8] text-xs leading-none text-white">
                2
              </span>
            </button>
            <div className="flex items-center gap-2">
              <Image
                className="size-12 rounded-full object-cover"
                src="/figma-auth/avatar.png"
                alt="Rokey"
                width={48}
                height={48}
              />
              <span className="text-base text-[#e6e6e6] max-[520px]:hidden">Rokey</span>
            </div>
          </div>
          <div className="relative hidden items-center gap-3 max-[760px]:flex">
            <button
              className="relative flex size-10 items-center justify-center rounded-full bg-white text-[#1d4ed8]"
              type="button"
              aria-label="Notifications"
            >
              <BellIcon />
              <span className="absolute -top-0.5 right-0 flex size-4 items-center justify-center rounded-full bg-[#1d4ed8] text-[10px] leading-none text-white">
                2
              </span>
            </button>
            <details className="group relative">
              <summary
                className="flex size-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg border border-[#088bdc] bg-[#020202] bg-[linear-gradient(180deg,rgba(0,123,215,0)_0%,rgba(0,123,215,0.2)_100%)] shadow-[0_2px_5px_rgba(0,123,215,0.3),0_3px_10px_rgba(0,123,215,0.4),0_8px_20px_rgba(0,123,215,0.4)] [&::-webkit-details-marker]:hidden"
                aria-label="Open navigation menu"
              >
                <span className="h-0.5 w-5 rounded-full bg-white" />
                <span className="h-0.5 w-5 rounded-full bg-white" />
                <span className="h-0.5 w-5 rounded-full bg-white" />
              </summary>
              <div className="absolute top-12 right-0 flex w-[230px] flex-col gap-4 rounded-2xl bg-[rgba(4,4,4,0.88)] p-4 shadow-[0_4px_18.4px_rgba(0,0,0,0.6)]">
                {authedNavLinks.map((link) => (
                  <Link
                    className="text-base font-medium text-white no-underline"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-1 flex items-center gap-2 border-t border-white/10 pt-4">
                  <Image
                    className="size-10 rounded-full object-cover"
                    src="/figma-auth/avatar.png"
                    alt="Rokey"
                    width={40}
                    height={40}
                  />
                  <span className="text-base text-[#e6e6e6]">Rokey</span>
                </div>
              </div>
            </details>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="absolute top-5 left-1/2 z-30 flex w-[min(1280px,calc(100%-80px))] -translate-x-1/2 items-center justify-between rounded-[24px] bg-[rgba(1,1,1,0.30)] px-6 py-4 shadow-[0_4px_18.4px_rgba(0,0,0,0.8)] max-[1180px]:w-[calc(100%-32px)]">
      <Logo />
      <nav
        className="flex items-center gap-8 text-base font-medium tracking-[-0.32px] max-[760px]:hidden"
        aria-label="Primary navigation"
      >
        {navLinks.map((link) => (
          <a className="text-inherit no-underline" href="#" key={link}>
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-3 max-[760px]:hidden">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-lg border border-[#088bdc] hover:border-[#00d4ff] transition-colors duration-300 bg-[#020202] bg-[linear-gradient(180deg,rgba(0,123,215,0)_0%,rgba(0,123,215,0.2)_100%)] px-4 py-2 text-base font-medium leading-6 text-white no-underline shadow-[0_2px_5px_rgba(0,123,215,0.3),0_3px_10px_rgba(0,123,215,0.4),0_8px_20px_rgba(0,123,215,0.4)] max-[760px]:h-9 max-[760px]:px-3 max-[760px]:text-[13px]"
          href="/login"
        >
          Log In
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-4 py-2 text-base font-medium leading-6 text-white no-underline max-[760px]:h-9 max-[760px]:px-3 max-[760px]:text-[13px]"
          href="/create-account"
        >
          Create Account
        </Link>
      </div>
      <details className="group relative hidden max-[760px]:block">
        <summary
          className="flex size-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-lg border border-[#088bdc] bg-[#020202] bg-[linear-gradient(180deg,rgba(0,123,215,0)_0%,rgba(0,123,215,0.2)_100%)] shadow-[0_2px_5px_rgba(0,123,215,0.3),0_3px_10px_rgba(0,123,215,0.4),0_8px_20px_rgba(0,123,215,0.4)] [&::-webkit-details-marker]:hidden"
          aria-label="Open navigation menu"
        >
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
          <span className="h-0.5 w-5 rounded-full bg-white" />
        </summary>
        <div className="absolute top-12 right-0 flex w-[220px] flex-col gap-3 rounded-2xl bg-[rgba(4,4,4,0.78)] p-4 shadow-[0_4px_18.4px_rgba(0,0,0,0.6)]">
          {navLinks.map((link) => (
            <a className="text-base font-medium text-white no-underline" href="#" key={link}>
              {link}
            </a>
          ))}
          <div className="mt-1 flex flex-col gap-3">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-lg border border-[#088bdc] bg-[#020202] bg-[linear-gradient(180deg,rgba(0,123,215,0)_0%,rgba(0,123,215,0.2)_100%)] px-4 py-2 text-base font-medium leading-6 text-white no-underline shadow-[0_2px_5px_rgba(0,123,215,0.3),0_3px_10px_rgba(0,123,215,0.4),0_8px_20px_rgba(0,123,215,0.4)]"
              href="/login"
            >
              Log In
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-t from-[#0043f8] to-[#0075f8] px-4 py-2 text-base font-medium leading-6 text-white no-underline"
              href="/create-account"
            >
              Create Account
            </Link>
          </div>
        </div>
      </details>
    </header>
  );
}
