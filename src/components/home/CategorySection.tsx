import { Link } from "react-router-dom";
import { 
  DollarSign, 
  Heart, 
  Calculator, 
  ArrowRightLeft, 
  Calendar, 
  MoreHorizontal 
} from "lucide-react";

const categories = [
  {
    name: "Finance",
    description: "Loan, interest, investment & tax calculators",
    icon: DollarSign,
    href: "/category/finance",
    color: "bg-category-finance/10 text-category-finance",
    count: 15,
  },
  {
    name: "Health & Fitness",
    description: "BMI, calorie, body fat & nutrition calculators",
    icon: Heart,
    href: "/category/health",
    color: "bg-category-health/10 text-category-health",
    count: 12,
  },
  {
    name: "Math",
    description: "Basic, scientific, percentage & fraction calculators",
    icon: Calculator,
    href: "/category/math",
    color: "bg-category-math/10 text-category-math",
    count: 20,
  },
  {
    name: "Conversion",
    description: "Unit, currency, temperature & time converters",
    icon: ArrowRightLeft,
    href: "/category/conversion",
    color: "bg-category-conversion/10 text-category-conversion",
    count: 18,
  },
  {
    name: "Date & Time",
    description: "Age, date difference, countdown calculators",
    icon: Calendar,
    href: "/category/date",
    color: "bg-category-date/10 text-category-date",
    count: 8,
  },
  {
    name: "Other Tools",
    description: "Random generators, text tools & more",
    icon: MoreHorizontal,
    href: "/category/other",
    color: "bg-category-other/10 text-category-other",
    count: 10,
  },
];

export function CategorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Calculator Categories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our collection of free online calculators organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group bg-card rounded-xl p-6 border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
