import { Link } from "react-router-dom";
import { Calculator, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navLinks = [
  { name: "Age", href: "/" },
  { name: "BMI", href: "/calculator/bmi" },
  { name: "EMI", href: "/calculator/loan-emi" },
  { name: "SIP", href: "/calculator/sip" },
  { name: "GST", href: "/calculator/gst" },
  { name: "Compound Interest", href: "/calculator/compound-interest" },
  { name: "Calorie", href: "/calculator/calorie" },
  { name: "Percentage", href: "/calculator/percentage" },
  { name: "Tip", href: "/calculator/tip" },
  { name: "Discount", href: "/calculator/discount" },
  { name: "Unit Converter", href: "/calculator/unit-converter" },
  { name: "Basic", href: "/calculator/basic" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <Calculator className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:block">Calculatorss</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 flex-wrap">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-2 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card animate-fade-in">
          <nav className="container py-4 grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}