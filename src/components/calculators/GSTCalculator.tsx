import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GSTCalculator() {
  const [amount, setAmount] = useState("");
  const [gstRate, setGstRate] = useState("18");
  const [calcType, setCalcType] = useState<"add" | "remove">("add");

  const gstRates = ["5", "12", "18", "28"];

  const calculate = () => {
    const amt = parseFloat(amount);
    const rate = parseFloat(gstRate);
    
    if (amt <= 0 || rate <= 0) return null;

    if (calcType === "add") {
      const gstAmount = (amt * rate) / 100;
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      return {
        originalAmount: amt,
        gstAmount,
        cgst,
        sgst,
        totalAmount: amt + gstAmount
      };
    } else {
      const originalAmount = (amt * 100) / (100 + rate);
      const gstAmount = amt - originalAmount;
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      return {
        originalAmount,
        gstAmount,
        cgst,
        sgst,
        totalAmount: amt
      };
    }
  };

  const result = calculate();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2
    }).format(value);
  };

  const reset = () => {
    setAmount("");
    setGstRate("18");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">GST Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs value={calcType} onValueChange={(v) => setCalcType(v as "add" | "remove")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="add">Add GST</TabsTrigger>
            <TabsTrigger value="remove">Remove GST</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="amount">
              {calcType === "add" ? "Original Amount (₹)" : "Amount with GST (₹)"}
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>GST Rate (%)</Label>
            <div className="flex gap-2">
              {gstRates.map((rate) => (
                <Button
                  key={rate}
                  variant={gstRate === rate ? "default" : "outline"}
                  size="sm"
                  onClick={() => setGstRate(rate)}
                  className="flex-1"
                >
                  {rate}%
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Button variant="outline" onClick={reset} className="w-full">
          Reset
        </Button>

        {result && amount && (
          <div className="space-y-4 pt-4 border-t">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Original Amount</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatCurrency(result.originalAmount)}
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">GST Amount</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatCurrency(result.gstAmount)}
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">CGST ({parseFloat(gstRate) / 2}%)</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatCurrency(result.cgst)}
                </p>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">SGST ({parseFloat(gstRate) / 2}%)</p>
                <p className="text-lg font-semibold text-foreground">
                  {formatCurrency(result.sgst)}
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
