import { CalculatorLayout } from "@/components/calculators/CalculatorLayout";
import { CalorieCalculator } from "@/components/calculators/CalorieCalculator";
import { calculatorContent } from "@/data/calculatorContent";

const CalorieCalculatorPage = () => {
  return (
    <CalculatorLayout
      title="Calorie Calculator"
      description="Calculate your daily calorie needs based on your age, gender, weight, height, and activity level."
      category="Health"
      categoryHref="/"
      content={calculatorContent.calorie}
    >
      <CalorieCalculator />
    </CalculatorLayout>
  );
};

export default CalorieCalculatorPage;
