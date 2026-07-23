import { ParticleBackground } from "@/components/landing/particle-background";
import { Hero } from "@/components/landing/hero";
import { FeaturesGrid } from "@/components/landing/features-grid";
import { StatsSection } from "@/components/landing/stats-section";
import { Testimonials } from "@/components/landing/testimonials";
import { CTASection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <ParticleBackground />
      <Hero />
      <FeaturesGrid />
      <StatsSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
