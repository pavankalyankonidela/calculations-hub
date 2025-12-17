import { Layout } from "@/components/layout/Layout";
import { AgeCalculator } from "@/components/calculators/AgeCalculator";
import { Link } from "react-router-dom";
import { Calculator, Heart, Percent, ArrowRight, DollarSign, Receipt, Tag, ArrowLeftRight, TrendingUp, Landmark, Flame, PiggyBank, Divide } from "lucide-react";

const allCalculators = [
  { name: "BMI Calculator", description: "Calculate Body Mass Index", icon: Heart, href: "/calculator/bmi", category: "Health" },
  { name: "Loan EMI Calculator", description: "Monthly loan payments", icon: DollarSign, href: "/calculator/loan-emi", category: "Finance" },
  { name: "SIP Calculator", description: "Investment returns", icon: TrendingUp, href: "/calculator/sip", category: "Finance" },
  { name: "GST Calculator", description: "Tax calculations", icon: Landmark, href: "/calculator/gst", category: "Finance" },
  { name: "Compound Interest", description: "Interest on interest", icon: PiggyBank, href: "/calculator/compound-interest", category: "Finance" },
  { name: "Calorie Calculator", description: "Daily calorie needs", icon: Flame, href: "/calculator/calorie", category: "Health" },
  { name: "Percentage Calculator", description: "Percentage calculations", icon: Percent, href: "/calculator/percentage", category: "Math" },
  { name: "Tip Calculator", description: "Calculate tips & split bills", icon: Receipt, href: "/calculator/tip", category: "Finance" },
  { name: "Discount Calculator", description: "Find final prices", icon: Tag, href: "/calculator/discount", category: "Finance" },
  { name: "Unit Converter", description: "Length, weight, temperature", icon: ArrowLeftRight, href: "/calculator/unit-converter", category: "Utility" },
  { name: "Basic Calculator", description: "Arithmetic operations", icon: Calculator, href: "/calculator/basic", category: "Math" },
];

const Index = () => {
  return (
    <Layout>
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

      {/* All Calculators Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              All Free Online Calculators
            </h2>
            <p className="text-muted-foreground">
              Choose from our collection of 12 free calculators
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {allCalculators.map((calc, index) => (
              <Link
                key={calc.name}
                to={calc.href}
                className="group bg-card rounded-xl p-4 md:p-6 border border-border card-hover animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-primary/10 text-primary mb-3 md:mb-4">
                  <calc.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="font-semibold text-sm md:text-lg text-foreground group-hover:text-primary transition-colors mb-1 md:mb-2">
                  {calc.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4 hidden sm:block">
                  {calc.description}
                </p>
                <span className="inline-flex items-center text-xs md:text-sm font-medium text-primary">
                  Try now <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
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
    </Layout>
  );
};

export default Index;