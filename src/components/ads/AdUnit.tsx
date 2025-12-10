interface AdUnitProps {
  slot: string;
  format?: "horizontal" | "vertical" | "rectangle" | "leaderboard";
  className?: string;
}

const formatStyles = {
  horizontal: "h-[90px] min-h-[90px]",
  vertical: "h-[600px] min-h-[250px]",
  rectangle: "h-[250px] min-h-[250px]",
  leaderboard: "h-[90px] md:h-[90px] min-h-[90px]",
};

export function AdUnit({ slot, format = "rectangle", className = "" }: AdUnitProps) {
  return (
    <div 
      className={`w-full bg-secondary/50 border border-border/50 rounded-lg flex items-center justify-center text-muted-foreground text-sm ${formatStyles[format]} ${className}`}
      data-ad-slot={slot}
      data-ad-format={format}
    >
      {/* AdSense script will replace this content */}
      <span className="opacity-50">Advertisement</span>
    </div>
  );
}
