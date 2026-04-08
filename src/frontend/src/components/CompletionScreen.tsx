import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { motion } from "motion/react";

interface CompletionScreenProps {
  onRestart: () => void;
}

const STARS = [
  { top: "10%", left: "8%", size: 3, delay: 0 },
  { top: "20%", left: "85%", size: 2, delay: 0.3 },
  { top: "60%", left: "5%", size: 2, delay: 0.6 },
  { top: "75%", left: "90%", size: 3, delay: 0.2 },
  { top: "45%", left: "92%", size: 2, delay: 0.8 },
  { top: "80%", left: "12%", size: 2, delay: 0.5 },
  { top: "5%", left: "55%", size: 2, delay: 0.9 },
  { top: "90%", left: "60%", size: 3, delay: 0.1 },
];

export default function CompletionScreen({ onRestart }: CompletionScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      className="w-full max-w-lg text-center relative"
    >
      {/* Floating stars */}
      {STARS.map((star) => (
        <motion.div
          key={`star-${star.top}-${star.left}`}
          className="absolute rounded-full bg-primary"
          style={{
            top: star.top,
            left: star.left,
            width: star.size * 4,
            height: star.size * 4,
            boxShadow: `0 0 ${star.size * 4}px oklch(0.72 0.22 190 / 0.8)`,
          }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 2 + star.delay,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
          }}
        />
      ))}

      <div className="bg-card border border-primary/30 rounded-2xl p-10 glow-primary relative overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-2xl" />

        {/* Trophy */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-7xl mb-4"
          aria-label="Trophy"
        >
          🏆
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-display font-bold text-4xl text-primary tracking-wide mb-2 pulse-glow"
        >
          MISSION COMPLETE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-foreground font-body text-lg mb-1"
        >
          You completed all levels!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
          className="text-muted-foreground font-body text-sm mb-8"
        >
          All 3 challenges defeated. The archives are yours.
        </motion.p>

        {/* Level recap badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex justify-center gap-3 mb-8"
        >
          {["01", "02", "03"].map((n) => (
            <div
              key={n}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 border-2 border-primary text-primary font-display font-bold text-sm glow-primary"
            >
              {n}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <Button
            data-ocid="completion-restart-btn"
            onClick={onRestart}
            variant="outline"
            className="border-primary/40 text-primary hover:bg-primary/10 font-display tracking-widest uppercase transition-smooth"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Play Again
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
