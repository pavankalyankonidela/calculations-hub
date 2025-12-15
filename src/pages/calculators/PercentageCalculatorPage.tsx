import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { PercentageCalculator } from "@/components/calculators/PercentageCalculator";
import { calculatorContent } from "@/data/calculatorContent";

const PercentageCalculatorPage = () => {
  return (
    <Layout>
      <CalculatorLayout
        title="Percentage Calculator"
        description="Calculate percentages, percentage change, and percentage of a number easily."
        category="Math"
        categoryHref="/category/math"
        content={calculatorContent.percentage}
      >
        <PercentageCalculator />
      </CalculatorLayout>
    </Layout>
  );
};

export default PercentageCalculatorPage;
