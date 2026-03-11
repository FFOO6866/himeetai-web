import { useState } from "react";
import { motion } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { getEndpoints, getDemoRedirectUrl } from "@/config";

interface DemoCodeEntryProps {
  onBack: () => void;
}

const DemoCodeEntry = ({ onBack }: DemoCodeEntryProps) => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleComplete = async (value: string) => {
    setError("");
    setLoading(true);

    try {
      const res = await fetch(getEndpoints().validateCode, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: value }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          data.message || "Invalid or expired code. Please try again."
        );
      }

      const data = await res.json();
      const token = data.token || data.session_token;
      const demoBase = getDemoRedirectUrl();
      const fallbackUrl = `${demoBase}?token=${encodeURIComponent(token)}`;

      // Validate redirect URL origin to prevent open redirect attacks
      let redirectUrl = fallbackUrl;
      if (data.redirect_url) {
        try {
          const url = new URL(data.redirect_url);
          const allowed = new URL(demoBase);
          if (url.origin === allowed.origin) {
            redirectUrl = data.redirect_url;
          }
        } catch {
          // Invalid URL from API — use fallback
        }
      }

      window.location.href = redirectUrl;
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to verify code. Please try again."
      );
      setCode("");
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
      <div className="p-8 rounded-lg bg-card border border-border text-center">
        <h3 className="font-display font-bold text-foreground text-xl mb-2">
          Check Your Email
        </h3>
        <p className="text-sm text-muted-foreground font-body mb-8">
          We've sent a 6-digit access code to your inbox. Enter it below to
          launch your briefing.
        </p>

        <div className="flex justify-center mb-6">
          <InputOTP
            maxLength={6}
            value={code}
            onChange={setCode}
            onComplete={handleComplete}
            disabled={loading}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} className="w-12 h-14 text-lg bg-secondary/50 border-border" />
              <InputOTPSlot index={1} className="w-12 h-14 text-lg bg-secondary/50 border-border" />
              <InputOTPSlot index={2} className="w-12 h-14 text-lg bg-secondary/50 border-border" />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} className="w-12 h-14 text-lg bg-secondary/50 border-border" />
              <InputOTPSlot index={4} className="w-12 h-14 text-lg bg-secondary/50 border-border" />
              <InputOTPSlot index={5} className="w-12 h-14 text-lg bg-secondary/50 border-border" />
            </InputOTPGroup>
          </InputOTP>
        </div>

        {loading && (
          <p className="text-sm text-muted-foreground font-body">
            Verifying...
          </p>
        )}

        {error && (
          <p className="text-sm text-destructive font-body">{error}</p>
        )}

        <button
          type="button"
          onClick={onBack}
          className="text-xs text-muted-foreground font-body mt-6 hover:text-foreground transition-colors underline"
        >
          Didn't receive a code? Try a different email.
        </button>
      </div>
    </motion.div>
  );
};

export default DemoCodeEntry;
