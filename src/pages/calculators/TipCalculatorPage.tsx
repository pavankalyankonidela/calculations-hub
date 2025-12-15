import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { TipCalculator } from "@/components/calculators/TipCalculator";
import { calculatorContent } from "@/data/calculatorContent";

export default function TipCalculatorPage() {
  return (
    <Layout>
      <CalculatorLayout
        title="Tip Calculator"
        description="Calculate tips and split bills easily among friends."
        category="Finance Calculators"
        categoryHref="/"
        content={calculatorContent.tip}
      >
        <TipCalculator />
      </CalculatorLayout>
    </Layout>
  );
}
