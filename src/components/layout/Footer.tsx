import { Link } from "react-router-dom";
import { Calculator, Mail } from "lucide-react";

const calculatorLinks = [
  { name: "Age Calculator", href: "/" },
  { name: "BMI Calculator", href: "/calculator/bmi" },
  { name: "Loan EMI Calculator", href: "/calculator/loan-emi" },
  { name: "SIP Calculator", href: "/calculator/sip" },
  { name: "GST Calculator", href: "/calculator/gst" },
  { name: "Compound Interest", href: "/calculator/compound-interest" },
  { name: "Calorie Calculator", href: "/calculator/calorie" },
  { name: "Percentage Calculator", href: "/calculator/percentage" },
  { name: "Tip Calculator", href: "/calculator/tip" },
  { name: "Discount Calculator", href: "/calculator/discount" },
  { name: "Unit Converter", href: "/calculator/unit-converter" },
  { name: "Basic Calculator", href: "/calculator/basic" },
];

const resourceLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">Calculatorss</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Free online calculators for everyday calculations. Fast, accurate, and easy to use. Visit us at calculatorss.online
            </p>
            <div className="flex gap-4">
              <a href="mailto:contact@calculatorss.online" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Calculators</h3>
            <ul className="space-y-2 grid grid-cols-2 gap-x-4">
              {calculatorLinks.map((link) => (
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

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
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
            © {new Date().getFullYear()} calculatorss.online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}