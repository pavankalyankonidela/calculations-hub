import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { AgeCalculator } from "@/components/calculators/AgeCalculator";

const AgeCalculatorPage = () => {
  return (
    <Layout>
      <CalculatorLayout
        title="Age Calculator"
        description="Calculate your exact age in years, months, and days from your birth date."
        category="Date & Time"
        categoryHref="/category/date"
      >
        <AgeCalculator />
      </CalculatorLayout>
    </Layout>
  );
};

export default AgeCalculatorPage;
