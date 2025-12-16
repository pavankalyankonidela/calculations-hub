import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { SIPCalculator } from "@/components/calculators/SIPCalculator";
import { calculatorContent } from "@/data/calculatorContent";

const SIPCalculatorPage = () => {
  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="Calculate your Systematic Investment Plan returns. Plan your mutual fund investments with accurate projections."
      category="Finance"
      categoryHref="/"
      content={calculatorContent.sip}
    >
      <SIPCalculator />
    </CalculatorLayout>
  );
};

export default SIPCalculatorPage;
