import { Button } from "@/components/ui/button";
import { Flag, MessageSquare, Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Level3Props {
  onComplete: () => void;
}

export default function Level3({ onComplete }: Level3Props) {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="bg-card border border-primary/30 rounded-xl p-8 relative overflow-hidden">
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ boxShadow: "0 0 40px oklch(0.72 0.22 190 / 0.15) inset" }}
        />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary rounded-tl-xl" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary rounded-tr-xl" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary rounded-bl-xl" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary rounded-br-xl" />

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Phone className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="font-mono text-xs text-primary/70 tracking-widest uppercase">
              Level 03
            </p>
            <h2 className="font-display font-bold text-foreground text-xl tracking-wide">
              Phantom Data
            </h2>
          </div>
        </div>

        <p className="text-muted-foreground text-sm font-body mb-6 mt-1">
          The target number has been recovered. Acknowledge to proceed.
        </p>

        {/* Phone number — always visible */}
        <div className="rounded-xl bg-background/60 border border-primary/40 p-5 text-center mb-6 glow-primary">
          <p className="font-mono text-xs text-muted-foreground tracking-widest mb-2 uppercase">
            Target Number
          </p>
          <p
            data-ocid="level3-phone-number"
            className="font-display font-bold text-3xl text-primary tracking-widest pulse-glow"
          >
            4193413996
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!confirmed ? (
            <motion.div
              key="confirm"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <Button
                data-ocid="level3-ok-btn"
                onClick={() => setConfirmed(true)}
                className="w-full bg-primary text-primary-foreground font-display font-bold tracking-widest uppercase hover:bg-primary/90 transition-smooth h-12"
              >
                OK — Acknowledged
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-4"
            >
              {/* Secret instruction */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="rounded-lg bg-accent/10 border border-accent/40 p-4 flex items-start gap-3"
              >
                <MessageSquare className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-mono text-xs text-accent/80 tracking-wider uppercase mb-1">
                    Secret Transmission
                  </p>
                  <p className="text-foreground font-body text-sm">
                    Text the word{" "}
                    <span className="font-display font-bold text-accent tracking-wider">
                      poop
                    </span>{" "}
                    to{" "}
                    <span className="font-mono font-bold text-primary">
                      4193413996
                    </span>{" "}
                    to get the link.
                  </p>
                </div>
              </motion.div>

              {/* Congrats */}
              <div className="rounded-lg bg-primary/10 border border-primary/30 p-4 text-center">
                <p className="text-primary font-display font-bold text-xl tracking-wide pulse-glow">
                  🎉 Congratulations!
                </p>
                <p className="text-foreground font-body mt-1 text-sm">
                  Level 3 Complete!
                </p>
              </div>

              <Button
                data-ocid="level3-finish-btn"
                onClick={onComplete}
                className="w-full bg-primary text-primary-foreground font-display font-bold tracking-widest uppercase hover:bg-primary/90 transition-smooth h-12 group"
              >
                <Flag className="w-4 h-4 mr-2" />
                Finish — See Results
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
