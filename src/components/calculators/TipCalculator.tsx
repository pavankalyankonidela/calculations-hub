import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("15");
  const [people, setPeople] = useState("1");

  const bill = parseFloat(billAmount) || 0;
  const tip = parseFloat(tipPercent) || 0;
  const numPeople = parseInt(people) || 1;

  const tipAmount = (bill * tip) / 100;
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / numPeople;

  const presetTips = [10, 15, 18, 20, 25];

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Tip Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="bill">Bill Amount ($)</Label>
          <Input
            id="bill"
            type="number"
            placeholder="Enter bill amount"
            value={billAmount}
            onChange={(e) => setBillAmount(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Tip Percentage</Label>
          <div className="flex flex-wrap gap-2">
            {presetTips.map((preset) => (
              <Button
                key={preset}
                variant={tipPercent === String(preset) ? "calculator-primary" : "outline"}
                size="sm"
                onClick={() => setTipPercent(String(preset))}
              >
                {preset}%
              </Button>
            ))}
          </div>
          <Input
            type="number"
            placeholder="Custom tip %"
            value={tipPercent}
            onChange={(e) => setTipPercent(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="people">Number of People</Label>
          <Input
            id="people"
            type="number"
            min="1"
            placeholder="Split between"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>

        {bill > 0 && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Tip Amount:</span>
              <span className="font-semibold">${tipAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Amount:</span>
              <span className="font-semibold">${totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-muted-foreground">Per Person:</span>
              <span className="font-bold text-primary text-xl">${perPerson.toFixed(2)}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
