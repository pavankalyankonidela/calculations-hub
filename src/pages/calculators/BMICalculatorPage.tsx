import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { BMICalculator } from "@/components/calculators/BMICalculator";

const BMICalculatorPage = () => {
  return (
    <Layout>
      <CalculatorLayout
        title="BMI Calculator"
        description="Calculate your Body Mass Index and find out if you're in a healthy weight range."
        category="Health & Fitness"
        categoryHref="/category/health"
      >
        <BMICalculator />
      </CalculatorLayout>
    </Layout>
  );
};

export default BMICalculatorPage;
