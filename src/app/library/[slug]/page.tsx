import { GameDetailsPage } from "@/components/GameDetailsPage";

export function generateStaticParams() {
  return [{ slug: "elden-ring-shadow-of-the-erdtree" }];
}

export default function Page() {
  return <GameDetailsPage />;
}
