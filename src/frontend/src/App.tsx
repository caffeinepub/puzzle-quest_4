import { useState } from "react";
import CompletionScreen from "./components/CompletionScreen";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import LevelBadge from "./components/LevelBadge";

export type GameLevel = 1 | 2 | 3 | "complete";

export default function App() {
  const [level, setLevel] = useState<GameLevel>(1);

  const handleComplete = () => {
    setLevel((prev) => {
      if (prev === 1) return 2;
      if (prev === 2) return 3;
      if (prev === 3) return "complete";
      return prev;
    });
  };

  const handleRestart = () => {
    setLevel(1);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden">
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(oklch(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(90deg,oklch(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(var(--primary)/0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,oklch(var(--accent)/0.06)_0%,transparent_70%)]" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-4 bg-card border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary/20 border border-primary/40 flex items-center justify-center glow-primary">
            <span className="text-primary font-display font-bold text-xs">
              CC
            </span>
          </div>
          <span className="font-display font-bold text-foreground tracking-widest text-sm uppercase">
            Cyber_Crypt
          </span>
        </div>

        {level !== "complete" && (
          <div className="flex items-center gap-2">
            {([1, 2, 3] as const).map((l) => (
              <LevelBadge key={l} levelNum={l} currentLevel={level as number} />
            ))}
          </div>
        )}

        <div className="font-mono text-xs text-muted-foreground tracking-wider">
          {level !== "complete" ? `LEVEL ${level}/3` : "COMPLETE"}
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-6">
        {level === 1 && <Level1 onComplete={handleComplete} />}
        {level === 2 && <Level2 onComplete={handleComplete} />}
        {level === 3 && <Level3 onComplete={handleComplete} />}
        {level === "complete" && <CompletionScreen onRestart={handleRestart} />}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-3 text-center bg-card border-t border-border">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()}. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-200"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
