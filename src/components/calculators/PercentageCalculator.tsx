import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type CalcType = "percentage" | "percentOf" | "percentChange";

export function PercentageCalculator() {
  const [calcType, setCalcType] = useState<CalcType>("percentOf");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const calculate = () => {
    const num1 = parseFloat(value1);
    const num2 = parseFloat(value2);

    if (isNaN(num1) || isNaN(num2)) return;

    let res: number;

    switch (calcType) {
      case "percentOf":
        // What is X% of Y?
        res = (num1 / 100) * num2;
        setResult(`${num1}% of ${num2} = ${res.toFixed(2)}`);
        break;
      case "percentage":
        // X is what % of Y?
        res = (num1 / num2) * 100;
        setResult(`${num1} is ${res.toFixed(2)}% of ${num2}`);
        break;
      case "percentChange":
        // % change from X to Y
        res = ((num2 - num1) / num1) * 100;
        const changeType = res >= 0 ? "increase" : "decrease";
        setResult(`${Math.abs(res).toFixed(2)}% ${changeType} from ${num1} to ${num2}`);
        break;
    }
  };

  const clear = () => {
    setValue1("");
    setValue2("");
    setResult(null);
  };

  const getLabels = () => {
    switch (calcType) {
      case "percentOf":
        return { label1: "Percentage (%)", label2: "Number", placeholder1: "e.g., 25", placeholder2: "e.g., 200" };
      case "percentage":
        return { label1: "Value", label2: "Total", placeholder1: "e.g., 50", placeholder2: "e.g., 200" };
      case "percentChange":
        return { label1: "From", label2: "To", placeholder1: "e.g., 100", placeholder2: "e.g., 150" };
    }
  };

  const labels = getLabels();

  return (
    <div className="bg-card rounded-2xl border border-border shadow-lg p-6 max-w-md mx-auto">
      {/* Type Toggle */}
      <div className="flex rounded-lg bg-secondary p-1 mb-6">
        <button
          className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
            calcType === "percentOf" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
          onClick={() => { setCalcType("percentOf"); setResult(null); }}
        >
          X% of Y
        </button>
        <button
          className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
            calcType === "percentage" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
          onClick={() => { setCalcType("percentage"); setResult(null); }}
        >
          X is ?% of Y
        </button>
        <button
          className={`flex-1 py-2 px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
            calcType === "percentChange" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground"
          }`}
          onClick={() => { setCalcType("percentChange"); setResult(null); }}
        >
          % Change
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="value1" className="text-sm font-medium text-foreground mb-2 block">
            {labels.label1}
          </Label>
          <input
            id="value1"
            type="number"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="calculator-input"
            placeholder={labels.placeholder1}
          />
        </div>
        <div>
          <Label htmlFor="value2" className="text-sm font-medium text-foreground mb-2 block">
            {labels.label2}
          </Label>
          <input
            id="value2"
            type="number"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
            className="calculator-input"
            placeholder={labels.placeholder2}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <Button variant="secondary" className="flex-1" onClick={clear}>
          Clear
        </Button>
        <Button variant="default" className="flex-1" onClick={calculate}>
          Calculate
        </Button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-secondary rounded-xl p-6 text-center animate-scale-in">
          <div className="text-lg font-semibold text-foreground">{result}</div>
        </div>
      )}
    </div>
  );
}
