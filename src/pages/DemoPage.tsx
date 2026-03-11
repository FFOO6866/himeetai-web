import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import DemoHero from "@/components/demo/DemoHero";
import DemoAccessForm from "@/components/demo/DemoAccessForm";
import DemoCodeEntry from "@/components/demo/DemoCodeEntry";

type DemoStep = "form" | "code";

const DemoPage = () => {
  const [step, setStep] = useState<DemoStep>("form");

  return (
    <PageLayout>
      <DemoHero />
      <section className="page-section">
        {step === "form" && (
          <DemoAccessForm onSuccess={() => setStep("code")} />
        )}
        {step === "code" && (
          <DemoCodeEntry onBack={() => setStep("form")} />
        )}
      </section>
    </PageLayout>
  );
};

export default DemoPage;
