import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";

const PercentageCalculatorPage = () => {
  return (
    <Layout>
      <CalculatorLayout
        title="Percentage Calculator"
        description="Calculate percentages, percentage change, and percentage of a number easily."
        category="Math"
        categoryHref="/category/math"
      >
        <PercentageCalculator />
      </CalculatorLayout>
    </Layout>
  );
};

export default PercentageCalculatorPage;
