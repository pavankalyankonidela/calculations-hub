import { Layout } from "@/components/layout/Layout";
import { AgeCalculator } from "@/components/calculators/AgeCalculator";
import { Link } from "react-router-dom";
import { Calculator, Heart, Percent, ArrowRight, DollarSign, Receipt, Tag, ArrowLeftRight } from "lucide-react";
import { AdBannerTop, AdBannerInContent, AdBannerBottom } from "@/components/ads/AdBanner";

const otherCalculators = [
  {
    name: "Basic Calculator",
    description: "Arithmetic operations",
    icon: Calculator,
    href: "/calculator/basic",
  },
  {
    name: "BMI Calculator",
    description: "Body Mass Index",
    icon: Heart,
    href: "/calculator/bmi",
  },
  {
    name: "Percentage Calculator",
    description: "Percentage calculations",
    icon: Percent,
    href: "/calculator/percentage",
  },
  {
    name: "Loan EMI Calculator",
    description: "Monthly loan payments",
    icon: DollarSign,
    href: "/calculator/loan-emi",
  },
  {
    name: "Tip Calculator",
    description: "Calculate tips & split bills",
    icon: Receipt,
    href: "/calculator/tip",
  },
  {
    name: "Discount Calculator",
    description: "Find final prices",
    icon: Tag,
    href: "/calculator/discount",
  },
  {
    name: "Unit Converter",
    description: "Length, weight, temperature",
    icon: ArrowLeftRight,
    href: "/calculator/unit-converter",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Top Ad Banner */}
      <AdBannerTop />

      {/* Hero Section with Age Calculator */}
      <section className="relative overflow-hidden gradient-hero py-12 md:py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
              Age Calculator
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Calculate your exact age in years, months, and days. Find out how many days until your next birthday!
            </p>
          </div>

          {/* Age Calculator */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <AgeCalculator />
          </div>
        </div>
      </section>

      {/* In-Content Ad */}
      <div className="container">
        <AdBannerInContent />
      </div>

      {/* Other Calculators Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              More Calculators
            </h2>
            <p className="text-muted-foreground">
              Explore our collection of free online calculators
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {otherCalculators.map((calc, index) => (
              <Link
                key={calc.name}
                to={calc.href}
                className="group bg-card rounded-xl p-6 border border-border card-hover animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4">
                  <calc.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-2">
                  {calc.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {calc.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Try now <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free to Use</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">Instant</div>
              <div className="text-muted-foreground">Results</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">Accurate</div>
              <div className="text-muted-foreground">Calculations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Banner */}
      <AdBannerBottom />
    </Layout>
  );
};

export default Index;
