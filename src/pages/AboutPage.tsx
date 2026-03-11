import PageLayout from "@/components/PageLayout";
import AboutHero from "@/components/about/AboutHero";
import ManifestoStrip from "@/components/about/ManifestoStrip";
import PhilosophySection from "@/components/about/PhilosophySection";
import ByTheNumbers from "@/components/about/ByTheNumbers";
import TeamTeaser from "@/components/about/TeamTeaser";

const AboutPage = () => {
  return (
    <PageLayout>
      <AboutHero />
      <ManifestoStrip />
      <PhilosophySection />
      <ByTheNumbers />
      <TeamTeaser />
    </PageLayout>
  );
};

export default AboutPage;
