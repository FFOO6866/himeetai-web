import PageLayout from "@/components/PageLayout";
import ServicesHero from "@/components/services/ServicesHero";
import CapabilityPillars from "@/components/services/CapabilityPillars";
import TierCards from "@/components/services/TierCards";
import AgencyComparison from "@/components/services/AgencyComparison";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import ServicesCTA from "@/components/services/ServicesCTA";

const ServicesPage = () => {
  return (
    <PageLayout>
      <ServicesHero />
      <CapabilityPillars />
      <TierCards />
      <AgencyComparison />
      <ProcessTimeline />
      <ServicesCTA />
    </PageLayout>
  );
};

export default ServicesPage;
