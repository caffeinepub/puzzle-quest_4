interface LevelBadgeProps {
  levelNum: number;
  currentLevel: number;
}

export default function LevelBadge({
  levelNum,
  currentLevel,
}: LevelBadgeProps) {
  const isComplete = levelNum < currentLevel;
  const isActive = levelNum === currentLevel;

  return (
    <div
      data-ocid={`level-badge-${levelNum}`}
      className={[
        "w-7 h-7 rounded-full border-2 flex items-center justify-center font-mono text-xs font-bold transition-smooth",
        isComplete
          ? "bg-primary/20 border-primary text-primary glow-primary"
          : isActive
            ? "bg-primary/10 border-primary/60 text-primary/80 pulse-glow"
            : "bg-muted border-border text-muted-foreground",
      ].join(" ")}
      title={`Level ${levelNum}`}
    >
      {isComplete ? "✓" : levelNum}
    </div>
  );
}
