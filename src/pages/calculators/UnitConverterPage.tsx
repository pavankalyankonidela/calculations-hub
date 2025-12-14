import { Layout } from "@/components/layout/Layout";
import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { UnitConverter } from "@/components/calculators/UnitConverter";

export default function UnitConverterPage() {
  return (
    <Layout>
      <CalculatorLayout
        title="Unit Converter"
        description="Convert between different units of length, weight, and temperature."
        category="Conversion Tools"
        categoryHref="/"
      >
        <UnitConverter />
      </CalculatorLayout>
    </Layout>
  );
}
