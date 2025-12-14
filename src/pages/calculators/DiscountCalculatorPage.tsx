import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { DiscountCalculator } from "@/components/calculators/DiscountCalculator";

export default function DiscountCalculatorPage() {
  return (
    <Layout>
      <CalculatorLayout
        title="Discount Calculator"
        description="Calculate discounts and final prices after applying percentage off."
        category="Finance Calculators"
        categoryHref="/"
      >
        <DiscountCalculator />
      </CalculatorLayout>
    </Layout>
  );
}
