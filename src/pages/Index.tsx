import { Layout } from "@/components/layout/Layout";
import { AgeCalculator } from "@/components/calculators/AgeCalculator";
import { Link } from "react-router-dom";
import { Calculator, Heart, Percent, ArrowRight, DollarSign, Receipt, Tag, ArrowLeftRight, TrendingUp, Landmark, Flame, PiggyBank, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const allCalculators = [
  { name: "Age Calculator", shortName: "Age", description: "Calculate exact age in years, months, days", icon: Calendar, href: "/", category: "Utility", isActive: true },
  { name: "BMI Calculator", shortName: "BMI", description: "Calculate Body Mass Index", icon: Heart, href: "/calculator/bmi", category: "Health" },
  { name: "Loan EMI Calculator", shortName: "EMI", description: "Monthly loan payments", icon: DollarSign, href: "/calculator/loan-emi", category: "Finance" },
  { name: "SIP Calculator", shortName: "SIP", description: "Investment returns", icon: TrendingUp, href: "/calculator/sip", category: "Finance" },
  { name: "GST Calculator", shortName: "GST", description: "Tax calculations", icon: Landmark, href: "/calculator/gst", category: "Finance" },
  { name: "Compound Interest", shortName: "CI", description: "Interest on interest", icon: PiggyBank, href: "/calculator/compound-interest", category: "Finance" },
  { name: "Calorie Calculator", shortName: "Calories", description: "Daily calorie needs", icon: Flame, href: "/calculator/calorie", category: "Health" },
  { name: "Percentage Calculator", shortName: "Percentage", description: "Percentage calculations", icon: Percent, href: "/calculator/percentage", category: "Math" },
  { name: "Tip Calculator", shortName: "Tip", description: "Calculate tips & split bills", icon: Receipt, href: "/calculator/tip", category: "Finance" },
  { name: "Discount Calculator", shortName: "Discount", description: "Find final prices", icon: Tag, href: "/calculator/discount", category: "Finance" },
  { name: "Unit Converter", shortName: "Units", description: "Length, weight, temperature", icon: ArrowLeftRight, href: "/calculator/unit-converter", category: "Utility" },
  { name: "Basic Calculator", shortName: "Basic", description: "Arithmetic operations", icon: Calculator, href: "/calculator/basic", category: "Math" },
];

const Index = () => {
  return (
    <Layout>
      {/* Quick Calculator Navigation - SEO Friendly */}
      <nav className="bg-card border-b border-border sticky top-16 z-40" aria-label="Calculator quick navigation">
        <div className="container py-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {allCalculators.map((calc) => (
              <Link key={calc.name} to={calc.href}>
                <Button
                  variant={calc.isActive ? "default" : "outline"}
                  size="sm"
                  className="gap-1.5 text-xs sm:text-sm"
                >
                  <calc.icon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">{calc.shortName}</span>
                  <span className="sm:hidden">{calc.shortName}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Age Calculator */}
      <section className="relative overflow-hidden gradient-hero py-12 md:py-20" aria-labelledby="hero-heading">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <header className="text-center mb-8">
            <h1 id="hero-heading" className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
              Free Online Age Calculator
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Calculate your exact age in years, months, and days. Find out how many days until your next birthday!
            </p>
          </header>

          {/* Age Calculator */}
          <div className="max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <AgeCalculator />
          </div>
        </div>
      </section>

      {/* All Calculators Section */}
      <section className="py-16 md:py-20" aria-labelledby="calculators-heading">
        <div className="container">
          <header className="text-center mb-10">
            <h2 id="calculators-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              All Free Online Calculators
            </h2>
            <p className="text-muted-foreground">
              Choose from our collection of 12 free calculators for finance, health, math & more
            </p>
          </header>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {allCalculators.filter(c => !c.isActive).map((calc, index) => (
              <article key={calc.name}>
                <Link
                  to={calc.href}
                  className="group bg-card rounded-xl p-4 md:p-6 border border-border card-hover animate-fade-in text-center block h-full"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="inline-flex p-3 md:p-4 rounded-xl bg-primary/10 text-primary mb-3 md:mb-4">
                    <calc.icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-lg text-foreground group-hover:text-primary transition-colors mb-1 md:mb-2">
                    {calc.name}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 hidden sm:block">
                    {calc.description}
                  </p>
                  <span className="inline-flex items-center text-xs md:text-sm font-medium text-primary">
                    Try now <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30" aria-labelledby="features-heading">
        <div className="container">
          <h2 id="features-heading" className="sr-only">Why Choose Calculatorss.online</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Free to Use</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">12+</div>
              <div className="text-muted-foreground">Calculators</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl font-bold text-primary mb-2">Accurate</div>
              <div className="text-muted-foreground">Calculations</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16" aria-labelledby="about-heading">
        <div className="container max-w-4xl">
          <h2 id="about-heading" className="text-2xl font-bold text-foreground mb-6 text-center">
            About Calculatorss.online - Your Free Calculator Hub
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Welcome to <strong>Calculatorss.online</strong>, your one-stop destination for free online calculators. Whether you need to calculate loan EMI, plan your SIP investments, check your BMI, or simply do percentage calculations, we have the right tool for you.
            </p>
            <p>
              Our calculators are designed to be fast, accurate, and mobile-friendly. Each calculator comes with detailed explanations, formulas, and examples to help you understand how the calculations work. From financial planning with our <strong>EMI Calculator</strong>, <strong>SIP Calculator</strong>, and <strong>Compound Interest Calculator</strong> to health tracking with <strong>BMI Calculator</strong> and <strong>Calorie Calculator</strong> - we cover all your calculation needs.
            </p>
            <p>
              All calculators are completely free to use with no login required. Start calculating now and make informed decisions with accurate results!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;