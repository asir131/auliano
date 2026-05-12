import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ReviewedGamesSection } from "@/components/ReviewedGamesSection";

export function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080b1c] font-sans text-white">
      <HeroSection />
      <ReviewedGamesSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </main>
  );
}
