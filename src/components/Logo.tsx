import Image from "next/image";

export function Logo() {
  return (
    <Image
      className="block size-14 object-cover"
      src="/figma/logo.png"
      alt="GAMELOG"
      width={56}
      height={56}
    />
  );
}
