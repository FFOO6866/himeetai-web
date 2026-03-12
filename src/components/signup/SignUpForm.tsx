import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { getEndpoints } from "@/config";
import type { Tier } from "@/data/services";

interface SignUpFormProps {
  selectedTier: Tier["id"] | null;
  onSuccess: () => void;
}

const SignUpForm = ({ selectedTier, onSuccess }: SignUpFormProps) => {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [goals, setGoals] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(getEndpoints().signup, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          company,
          email,
          phone: phone || undefined,
          website: website || undefined,
          goals,
          tier: selectedTier,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      onSuccess();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-lg mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
    >
      <div className="p-8 rounded-lg bg-card border border-border">
        <h3 className="font-display font-bold text-foreground text-xl mb-6 text-center">
          Your Details
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
              Full Name *
            </label>
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jane Smith"
              required
              className="bg-secondary/50 border-border"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
              Company *
            </label>
            <Input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Inc."
              required
              className="bg-secondary/50 border-border"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
              Work Email *
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@acme.com"
              type="email"
              required
              className="bg-secondary/50 border-border"
            />
          </div>
          {selectedTier !== "starter" && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
                    Phone
                  </label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    className="bg-secondary/50 border-border"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
                    Website
                  </label>
                  <Input
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://acme.com"
                    type="url"
                    className="bg-secondary/50 border-border"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
                  Goals & Objectives *
                </label>
                <textarea
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="Tell us about your growth goals, target markets, and what success looks like..."
                  required
                  rows={4}
                  className="w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm font-body text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background resize-none"
                />
              </div>
            </>
          )}

          {error && (
            <p className="text-sm text-destructive font-body">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !selectedTier}
            className="mt-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:brightness-110 transition-all duration-300 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : selectedTier === "starter" ? "Create My Account" : "Request Onboarding"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
