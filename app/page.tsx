import { HeroSection } from "@/components/hero-section";
import { ModelSection } from "@/components/model-section";
import { ScrollProgress } from "@/components/scroll-progress";
import { ServiceVerticalsSection } from "@/components/service-verticals-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSetupSection } from "@/components/team-setup-section";
import { TimelineSection } from "@/components/timeline-section";
import { TrainingCommitmentSection } from "@/components/training-commitment-section";
import { ValueSection } from "@/components/value-section";
import { WhySection } from "@/components/why-section";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <ScrollProgress />
      <SiteHeader />
      <HeroSection />
      <WhySection />
      <ModelSection />
      <TeamSetupSection />
      <ServiceVerticalsSection />
      <TrainingCommitmentSection />
      <TimelineSection />
      <ValueSection />
      <SiteFooter />
    </main>
  );
}
