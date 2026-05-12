type AppButtonProps = Readonly<{
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>;

export function AppButton({ children, variant = "primary" }: AppButtonProps) {
  const variantClass =
    variant === "primary"
      ? "border border-white/15 bg-gradient-to-t from-[#0043f8] to-[#0075f8]"
      : "border border-[#088bdc] hover:border-[#00d4ff] transition-colors duration-300 bg-[#020202] bg-[linear-gradient(180deg,rgba(0,123,215,0)_0%,rgba(0,123,215,0.2)_100%)] shadow-[0_2px_2.5px_rgba(0,123,215,0.3),0_3px_5px_rgba(0,123,215,0.4),0_8px_10px_rgba(0,123,215,0.4)]";

  return (
    <a
      className={`inline-flex h-12 w-[162px] items-center justify-center rounded-lg text-[15px] font-bold leading-6 tracking-[0.2565px] text-white no-underline ${variantClass}`}
      href="#"
    >
      {children}
    </a>
  );
}
