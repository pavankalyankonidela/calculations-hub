import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function LoanEMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalInterest: number;
    totalPayment: number;
  } | null>(null);

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (p > 0 && r > 0 && n > 0) {
      const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emi * n;
      const totalInterest = totalPayment - p;

      setResult({
        emi: Math.round(emi * 100) / 100,
        totalInterest: Math.round(totalInterest * 100) / 100,
        totalPayment: Math.round(totalPayment * 100) / 100,
      });
    }
  };

  const reset = () => {
    setPrincipal("");
    setRate("");
    setTenure("");
    setResult(null);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Loan EMI Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="principal">Loan Amount ($)</Label>
          <Input
            id="principal"
            type="number"
            placeholder="Enter loan amount"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rate">Interest Rate (% per year)</Label>
          <Input
            id="rate"
            type="number"
            step="0.1"
            placeholder="Enter interest rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tenure">Loan Tenure (years)</Label>
          <Input
            id="tenure"
            type="number"
            placeholder="Enter tenure in years"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <Button onClick={calculateEMI} className="flex-1" variant="calculator-primary">
            Calculate EMI
          </Button>
          <Button onClick={reset} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>

        {result && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Monthly EMI:</span>
              <span className="font-bold text-primary text-xl">${result.emi.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Interest:</span>
              <span className="font-semibold">${result.totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Payment:</span>
              <span className="font-semibold">${result.totalPayment.toLocaleString()}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
