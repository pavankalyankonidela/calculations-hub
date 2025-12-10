import { AdUnit } from "./AdUnit";

interface AdBannerProps {
  className?: string;
}

export function AdBannerTop({ className = "" }: AdBannerProps) {
  return (
    <div className={`container py-3 ${className}`}>
      <AdUnit slot="top-banner" format="leaderboard" />
    </div>
  );
}

export function AdBannerBottom({ className = "" }: AdBannerProps) {
  return (
    <div className={`container py-4 ${className}`}>
      <AdUnit slot="bottom-banner" format="leaderboard" />
    </div>
  );
}

export function AdBannerInContent({ className = "" }: AdBannerProps) {
  return (
    <div className={`w-full py-6 ${className}`}>
      <AdUnit slot="in-content" format="rectangle" />
    </div>
  );
}

export function AdBannerSidebar({ className = "" }: AdBannerProps) {
  return (
    <div className={`w-full ${className}`}>
      <AdUnit slot="sidebar" format="vertical" />
    </div>
  );
}
