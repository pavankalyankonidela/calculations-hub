import { Link } from "react-router-dom";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AdBannerInContent, AdBannerSidebar } from "@/components/ads/AdBanner";

interface CalculatorLayoutProps {
  title: string;
  description: string;
  category: string;
  categoryHref: string;
  children: React.ReactNode;
}

export function CalculatorLayout({ 
  title, 
  description, 
  category, 
  categoryHref,
  children 
}: CalculatorLayoutProps) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        text: description,
        url: window.location.href,
      });
    } catch {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="container py-8 md:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to={categoryHref} className="hover:text-foreground transition-colors">
          {category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <div>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {title}
              </h1>
              <p className="text-muted-foreground text-lg">{description}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Calculator */}
          <div className="mb-8">{children}</div>

          {/* In-Content Ad */}
          <AdBannerInContent className="my-8" />

          {/* Back Link */}
          <Link 
            to={categoryHref}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {category}
          </Link>
        </div>

        {/* Sidebar with Ad */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdBannerSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}
