import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { GSTCalculator } from "@/components/calculators/GSTCalculator";
import { calculatorContent } from "@/data/calculatorContent";

const GSTCalculatorPage = () => {
  return (
    <CalculatorLayout
      title="GST Calculator"
      description="Calculate GST amount easily. Add or remove GST from any price with CGST and SGST breakdown."
      category="Finance"
      categoryHref="/"
      content={calculatorContent.gst}
    >
      <GSTCalculator />
    </CalculatorLayout>
  );
};

export default GSTCalculatorPage;
