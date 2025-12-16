import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState("12");
  const [result, setResult] = useState<{
    totalAmount: number;
    compoundInterest: number;
    simpleInterest: number;
    difference: number;
  } | null>(null);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(compoundFrequency);

    if (P > 0 && r > 0 && t > 0) {
      const totalAmount = P * Math.pow(1 + r / n, n * t);
      const compoundInterest = totalAmount - P;
      const simpleInterest = P * r * t;
      const difference = compoundInterest - simpleInterest;

      setResult({
        totalAmount,
        compoundInterest,
        simpleInterest,
        difference
      });
    }
  };

  const reset = () => {
    setPrincipal("");
    setRate("");
    setTime("");
    setCompoundFrequency("12");
    setResult(null);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Compound Interest Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Principal Amount (₹)</Label>
            <Input
              id="principal"
              type="number"
              placeholder="e.g., 100000"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rate">Annual Interest Rate (%)</Label>
            <Input
              id="rate"
              type="number"
              placeholder="e.g., 8"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time Period (Years)</Label>
            <Input
              id="time"
              type="number"
              placeholder="e.g., 5"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Compounding Frequency</Label>
            <Select value={compoundFrequency} onValueChange={setCompoundFrequency}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Annually</SelectItem>
                <SelectItem value="2">Semi-Annually</SelectItem>
                <SelectItem value="4">Quarterly</SelectItem>
                <SelectItem value="12">Monthly</SelectItem>
                <SelectItem value="365">Daily</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">
            Calculate
          </Button>
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>

        {result && (
          <div className="space-y-4 pt-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Principal Amount</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatCurrency(parseFloat(principal))}
                </p>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Compound Interest</p>
                <p className="text-lg font-semibold text-green-600">
                  {formatCurrency(result.compoundInterest)}
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Simple Interest (for comparison)</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatCurrency(result.simpleInterest)}
                </p>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Extra Earnings</p>
                <p className="text-lg font-semibold text-blue-600">
                  {formatCurrency(result.difference)}
                </p>
              </div>
            </div>
            <div className="bg-primary/10 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
              <p className="text-2xl font-bold text-primary">
                {formatCurrency(result.totalAmount)}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
