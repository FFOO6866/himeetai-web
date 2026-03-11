import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { getEndpoints } from "@/config";

interface DemoAccessFormProps {
  onSuccess: () => void;
}

const DemoAccessForm = ({ onSuccess }: DemoAccessFormProps) => {
  const [companyName, setCompanyName] = useState("");
  const [companyUrl, setCompanyUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(getEndpoints().requestDemo, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: companyName,
          company_url: companyUrl,
          email,
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
          : "Unable to connect. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="p-8 rounded-lg bg-card border border-border">
        <h3 className="font-display font-bold text-foreground text-xl mb-2 text-center">
          Request Access
        </h3>
        <p className="text-sm text-muted-foreground font-body text-center mb-6">
          Enter your details and we'll send you an access code.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
              Company Name
            </label>
            <Input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Acme Inc."
              required
              className="bg-secondary/50 border-border"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
              Company URL
            </label>
            <Input
              value={companyUrl}
              onChange={(e) => setCompanyUrl(e.target.value)}
              placeholder="https://acme.com"
              type="url"
              required
              className="bg-secondary/50 border-border"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-display mb-1.5 block">
              Work Email
            </label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@acme.com"
              type="email"
              required
              className="bg-secondary/50 border-border"
            />
          </div>

          {error && (
            <p className="text-sm text-destructive font-body">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:brightness-110 transition-all duration-300 text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Requesting..." : "Get My Briefing"}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default DemoAccessForm;
