import { Link } from "react-router-dom";
import { ArrowRight, Calculator, Heart, Percent, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const popularCalculators = [
  {
    name: "Basic Calculator",
    description: "Perform basic arithmetic operations like addition, subtraction, multiplication, and division.",
    icon: Calculator,
    href: "/calculator/basic",
    category: "Math",
  },
  {
    name: "BMI Calculator",
    description: "Calculate your Body Mass Index and find out if you're in a healthy weight range.",
    icon: Heart,
    href: "/calculator/bmi",
    category: "Health",
  },
  {
    name: "Percentage Calculator",
    description: "Calculate percentages, percentage change, and percentage of a number easily.",
    icon: Percent,
    href: "/calculator/percentage",
    category: "Math",
  },
  {
    name: "Age Calculator",
    description: "Calculate your exact age in years, months, and days from your birth date.",
    icon: Calendar,
    href: "/calculator/age",
    category: "Date & Time",
  },
];

export function PopularCalculators() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Popular Calculators
            </h2>
            <p className="text-muted-foreground text-lg">
              Most used calculators by our users
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/calculators">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {popularCalculators.map((calc, index) => (
            <Link
              key={calc.name}
              to={calc.href}
              className="group bg-card rounded-xl p-6 border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <calc.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {calc.name}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                      {calc.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {calc.description}
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
