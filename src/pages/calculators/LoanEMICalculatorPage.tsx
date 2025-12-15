import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { LoanEMICalculator } from "@/components/calculators/LoanEMICalculator";
import { calculatorContent } from "@/data/calculatorContent";

export default function LoanEMICalculatorPage() {
  return (
    <Layout>
      <CalculatorLayout
        title="Loan EMI Calculator"
        description="Calculate your monthly EMI, total interest, and total payment for any loan."
        category="Finance Calculators"
        categoryHref="/"
        content={calculatorContent.loan}
      >
        <LoanEMICalculator />
      </CalculatorLayout>
    </Layout>
  );
}
