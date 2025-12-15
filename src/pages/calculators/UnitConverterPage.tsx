import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { UnitConverter } from "@/components/calculators/UnitConverter";
import { calculatorContent } from "@/data/calculatorContent";

export default function UnitConverterPage() {
  return (
    <Layout>
      <CalculatorLayout
        title="Unit Converter"
        description="Convert between different units of length, weight, and temperature."
        category="Conversion Tools"
        categoryHref="/"
        content={calculatorContent.unit}
      >
        <UnitConverter />
      </CalculatorLayout>
    </Layout>
  );
}
