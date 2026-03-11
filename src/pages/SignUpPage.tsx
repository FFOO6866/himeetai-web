import { useState } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import SignUpHero from "@/components/signup/SignUpHero";
import TierSelector from "@/components/signup/TierSelector";
import SignUpForm from "@/components/signup/SignUpForm";
import SignUpConfirmation from "@/components/signup/SignUpConfirmation";
import type { Tier } from "@/data/services";

const SignUpPage = () => {
  const location = useLocation();
  const preselectedTier = (location.state as { tier?: Tier["id"] })?.tier || null;
  const [selectedTier, setSelectedTier] = useState<Tier["id"] | null>(preselectedTier);
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageLayout>
      <SignUpHero />
      <section className="page-section-wide">
        {submitted ? (
          <SignUpConfirmation />
        ) : (
          <>
            <TierSelector selected={selectedTier} onSelect={setSelectedTier} />
            <SignUpForm
              selectedTier={selectedTier}
              onSuccess={() => setSubmitted(true)}
            />
          </>
        )}
      </section>
    </PageLayout>
  );
};

export default SignUpPage;
