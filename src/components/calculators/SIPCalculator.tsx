import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [result, setResult] = useState<{
    investedAmount: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);

  const calculate = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(timePeriod) * 12;

    if (P > 0 && r > 0 && n > 0) {
      const totalValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const investedAmount = P * n;
      const estimatedReturns = totalValue - investedAmount;

      setResult({
        investedAmount,
        estimatedReturns,
        totalValue
      });
    }
  };

  const reset = () => {
    setMonthlyInvestment("");
    setExpectedReturn("");
    setTimePeriod("");
    setResult(null);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">SIP Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="monthlyInvestment">Monthly Investment (₹)</Label>
            <Input
              id="monthlyInvestment"
              type="number"
              placeholder="e.g., 5000"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="expectedReturn">Expected Annual Return (%)</Label>
            <Input
              id="expectedReturn"
              type="number"
              placeholder="e.g., 12"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timePeriod">Time Period (Years)</Label>
            <Input
              id="timePeriod"
              type="number"
              placeholder="e.g., 10"
              value={timePeriod}
              onChange={(e) => setTimePeriod(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">
            Calculate SIP
          </Button>
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>

        {result && (
          <div className="space-y-4 pt-4 border-t">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Invested Amount</p>
                <p className="text-xl font-bold text-foreground">
                  {formatCurrency(result.investedAmount)}
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Estimated Returns</p>
                <p className="text-xl font-bold text-green-600">
                  {formatCurrency(result.estimatedReturns)}
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Total Value</p>
                <p className="text-xl font-bold text-primary">
                  {formatCurrency(result.totalValue)}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
