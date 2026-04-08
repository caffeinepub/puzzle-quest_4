import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Lock, Unlock } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Level1Props {
  onComplete: () => void;
}

export default function Level1({ onComplete }: Level1Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "1265") {
      setError("");
      setSuccess(true);
    } else {
      setError("Incorrect passcode. Access denied.");
      setInput("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="bg-card border border-primary/30 rounded-xl p-8 glow-primary relative overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl" />

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            {success ? (
              <Unlock className="w-5 h-5 text-primary" />
            ) : (
              <Lock className="w-5 h-5 text-primary" />
            )}
          </div>
          <div>
            <p className="font-mono text-xs text-primary/70 tracking-widest uppercase">
              Level 01
            </p>
            <h2 className="font-display font-bold text-foreground text-xl tracking-wide">
              Gatekeeper's Pass
            </h2>
          </div>
        </div>

        <p className="text-muted-foreground text-sm font-body mb-6 mt-1">
          Enter the 4-digit passcode to unlock the archives.
        </p>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Input
                  data-ocid="level1-passcode-input"
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                  placeholder="_ _ _ _"
                  className="bg-background/60 border-primary/30 text-center text-2xl tracking-[0.5em] font-mono text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary h-14 glow-cyan"
                  autoFocus
                />
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-destructive text-sm font-mono text-center"
                    >
                      ⚠ {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <Button
                data-ocid="level1-submit-btn"
                type="submit"
                disabled={input.length < 4}
                className="w-full bg-primary text-primary-foreground font-display font-bold tracking-widest uppercase hover:bg-primary/90 transition-smooth h-12 disabled:opacity-40"
              >
                Decrypt Access
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="rounded-lg bg-primary/10 border border-primary/30 p-4 text-center">
                <p className="text-primary font-display font-bold text-xl tracking-wide pulse-glow">
                  🎉 Congratulations!
                </p>
                <p className="text-foreground font-body mt-1 text-sm">
                  Level 1 Complete!
                </p>
              </div>
              <Button
                data-ocid="level1-next-btn"
                onClick={onComplete}
                className="w-full bg-primary text-primary-foreground font-display font-bold tracking-widest uppercase hover:bg-primary/90 transition-smooth h-12 group"
              >
                Next Level
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
