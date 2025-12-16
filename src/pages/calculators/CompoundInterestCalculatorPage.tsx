import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CompoundInterestCalculator } from "@/components/calculators/CompoundInterestCalculator";
import { calculatorContent } from "@/data/calculatorContent";

const CompoundInterestCalculatorPage = () => {
  return (
    <CalculatorLayout
      title="Compound Interest Calculator"
      description="Calculate compound interest on your investments. Compare with simple interest and see the power of compounding."
      category="Finance"
      categoryHref="/"
      content={calculatorContent.compound}
    >
      <CompoundInterestCalculator />
    </CalculatorLayout>
  );
};

export default CompoundInterestCalculatorPage;
