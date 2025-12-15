import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { BasicCalculator } from "@/components/calculators/BasicCalculator";
import { calculatorContent } from "@/data/calculatorContent";

const BasicCalculatorPage = () => {
  return (
    <Layout>
      <CalculatorLayout
        title="Basic Calculator"
        description="Perform basic arithmetic operations like addition, subtraction, multiplication, and division."
        category="Math"
        categoryHref="/category/math"
        content={calculatorContent.basic}
      >
        <BasicCalculator />
      </CalculatorLayout>
    </Layout>
  );
};

export default BasicCalculatorPage;
