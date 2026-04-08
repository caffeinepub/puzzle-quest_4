import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight, Radio } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Level2Props {
  onComplete: () => void;
}

// Morse code for 5385
const MORSE_SEQUENCE = [
  { digit: "5", code: ". . . . .", raw: ".....", id: "m1" },
  { digit: "3", code: ". . . – –", raw: "...--", id: "m2" },
  { digit: "8", code: "– – – . .", raw: "---..", id: "m3" },
  { digit: "5", code: ". . . . .", raw: ".....", id: "m4" },
];

function MorseSymbol({ char }: { char: string }) {
  if (char === ".") {
    return (
      <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary mx-0.5 shadow-[0_0_6px_oklch(var(--primary)/0.8)]" />
    );
  }
  return (
    <span className="inline-block w-6 h-2.5 rounded-full bg-accent mx-0.5 shadow-[0_0_6px_oklch(var(--accent)/0.8)]" />
  );
}

const CHAR_KEYS: Record<string, string[]> = {
  m1: ["m1-0", "m1-1", "m1-2", "m1-3", "m1-4"],
  m2: ["m2-0", "m2-1", "m2-2", "m2-3", "m2-4"],
  m3: ["m3-0", "m3-1", "m3-2", "m3-3", "m3-4"],
  m4: ["m4-0", "m4-1", "m4-2", "m4-3", "m4-4"],
};

function MorseRow({
  raw,
  id,
  index,
}: { digit: string; raw: string; id: string; index: number }) {
  const chars = raw.split("");
  const keys = CHAR_KEYS[id] ?? chars.map((_, ci) => `${id}-${ci}`);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.4 }}
      className="flex items-center gap-4 py-2.5 px-4 bg-background/40 rounded-lg border border-border hover:border-primary/30 transition-colors duration-200"
    >
      <span className="font-mono text-xs text-muted-foreground w-5 text-right">
        {index + 1}.
      </span>
      <div className="flex items-center gap-0.5">
        {chars.map((char, ci) => (
          <MorseSymbol key={keys[ci]} char={char} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Level2({ onComplete }: Level2Props) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === "5385") {
      setError("");
      setSuccess(true);
    } else {
      setError("Signal mismatch. Decode failed.");
      setInput("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-lg"
    >
      <div className="bg-card border border-accent/30 rounded-xl p-8 glow-accent relative overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-accent rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-accent rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-accent rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-accent rounded-br-xl" />

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
            <Radio className="w-5 h-5 text-accent" />
          </div>
          <div>
            <p className="font-mono text-xs text-accent/70 tracking-widest uppercase">
              Level 02
            </p>
            <h2 className="font-display font-bold text-foreground text-xl tracking-wide">
              Signal Decoder
            </h2>
          </div>
        </div>

        <p className="text-muted-foreground text-sm font-body mb-5 mt-1">
          Decode the Morse code sequence below and enter the 4-digit number.
        </p>

        {/* Morse display */}
        <div className="space-y-2 mb-6">
          {MORSE_SEQUENCE.map((item, i) => (
            <MorseRow
              key={item.id}
              digit={item.digit}
              raw={item.raw}
              id={item.id}
              index={i}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-5 text-xs text-muted-foreground font-mono mb-6 px-1">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-primary" />{" "}
            dot
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-6 h-2.5 rounded-full bg-accent" />{" "}
            dash
          </span>
        </div>

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
                  data-ocid="level2-decode-input"
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value.replace(/\D/g, ""));
                    setError("");
                  }}
                  placeholder="Enter decoded number"
                  className="bg-background/60 border-accent/30 text-center text-2xl tracking-[0.5em] font-mono text-foreground placeholder:text-muted-foreground/40 focus:border-accent h-14"
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
                data-ocid="level2-submit-btn"
                type="submit"
                disabled={input.length < 4}
                className="w-full bg-accent text-accent-foreground font-display font-bold tracking-widest uppercase hover:bg-accent/90 transition-smooth h-12 disabled:opacity-40"
              >
                Transmit Signal
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              <div className="rounded-lg bg-accent/10 border border-accent/30 p-4 text-center">
                <p className="text-accent font-display font-bold text-xl tracking-wide pulse-glow">
                  🎉 Congratulations!
                </p>
                <p className="text-foreground font-body mt-1 text-sm">
                  Level 2 Complete!
                </p>
              </div>
              <Button
                data-ocid="level2-next-btn"
                onClick={onComplete}
                className="w-full bg-accent text-accent-foreground font-display font-bold tracking-widest uppercase hover:bg-accent/90 transition-smooth h-12 group"
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
