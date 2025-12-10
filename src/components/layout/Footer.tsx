import { Link } from "react-router-dom";
import { Calculator, Mail, Github, Twitter } from "lucide-react";

const footerLinks = {
  calculators: [
    { name: "Basic Calculator", href: "/calculator/basic" },
    { name: "BMI Calculator", href: "/calculator/bmi" },
    { name: "Percentage Calculator", href: "/calculator/percentage" },
    { name: "Age Calculator", href: "/calculator/age" },
  ],
  categories: [
    { name: "Finance", href: "/category/finance" },
    { name: "Health", href: "/category/health" },
    { name: "Math", href: "/category/math" },
    { name: "Conversion", href: "/category/conversion" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">CalcHub</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free online calculators for everyday calculations. Fast, accurate, and easy to use.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Popular Calculators</h3>
            <ul className="space-y-3">
              {footerLinks.calculators.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} CalcHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
