import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
}

export function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [result, setResult] = useState<BMIResult | null>(null);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (!weightNum || !heightNum) return;

    let bmi: number;

    if (unit === "metric") {
      // Height in cm, weight in kg
      const heightM = heightNum / 100;
      bmi = weightNum / (heightM * heightM);
    } else {
      // Height in inches, weight in lbs
      bmi = (weightNum / (heightNum * heightNum)) * 703;
    }

    let category: string;
    let color: string;

    if (bmi < 18.5) {
      category = "Underweight";
      color = "text-category-math";
    } else if (bmi < 25) {
      category = "Normal weight";
      color = "text-category-finance";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "text-category-conversion";
    } else {
      category = "Obese";
      color = "text-category-health";
    }

    setResult({ bmi: Math.round(bmi * 10) / 10, category, color });
  };

  const clear = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-lg p-6 max-w-md mx-auto">
      {/* Unit Toggle */}
      <div className="flex rounded-lg bg-secondary p-1 mb-6">
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            unit === "metric"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground"
          }`}
          onClick={() => setUnit("metric")}
        >
          Metric
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            unit === "imperial"
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground"
          }`}
          onClick={() => setUnit("imperial")}
        >
          Imperial
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="weight" className="text-sm font-medium text-foreground mb-2 block">
            Weight ({unit === "metric" ? "kg" : "lbs"})
          </Label>
          <input
            id="weight"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="calculator-input"
            placeholder={`Enter weight in ${unit === "metric" ? "kilograms" : "pounds"}`}
          />
        </div>
        <div>
          <Label htmlFor="height" className="text-sm font-medium text-foreground mb-2 block">
            Height ({unit === "metric" ? "cm" : "inches"})
          </Label>
          <input
            id="height"
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="calculator-input"
            placeholder={`Enter height in ${unit === "metric" ? "centimeters" : "inches"}`}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <Button variant="secondary" className="flex-1" onClick={clear}>
          Clear
        </Button>
        <Button variant="default" className="flex-1" onClick={calculateBMI}>
          Calculate BMI
        </Button>
      </div>

      {/* Result */}
      {result && (
        <div className="bg-secondary rounded-xl p-6 text-center animate-scale-in">
          <div className="text-5xl font-bold text-foreground mb-2">{result.bmi}</div>
          <div className={`text-lg font-semibold ${result.color}`}>{result.category}</div>
          
          {/* BMI Scale */}
          <div className="mt-6 space-y-2">
            <div className="h-3 rounded-full bg-gradient-to-r from-category-math via-category-finance via-category-conversion to-category-health relative">
              <div 
                className="absolute w-3 h-5 bg-foreground rounded-full -top-1 transform -translate-x-1/2 transition-all duration-500"
                style={{ 
                  left: `${Math.min(Math.max((result.bmi - 15) / 25 * 100, 0), 100)}%` 
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>40</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
