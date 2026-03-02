import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import HowItWorks from "@/components/home/HowItWorks";
import TechStack from "@/components/home/TechStack";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturedProjects />
      <HowItWorks />
      <TechStack />
      <CTASection />
    </div>
  );
}
