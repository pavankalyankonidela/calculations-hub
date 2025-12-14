import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function DiscountCalculator() {
  const [originalPrice, setOriginalPrice] = useState("");
  const [discountPercent, setDiscountPercent] = useState("");

  const price = parseFloat(originalPrice) || 0;
  const discount = parseFloat(discountPercent) || 0;

  const discountAmount = (price * discount) / 100;
  const finalPrice = price - discountAmount;

  const presetDiscounts = [10, 20, 25, 30, 50];

  const reset = () => {
    setOriginalPrice("");
    setDiscountPercent("");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Discount Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="price">Original Price ($)</Label>
          <Input
            id="price"
            type="number"
            placeholder="Enter original price"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label>Discount Percentage</Label>
          <div className="flex flex-wrap gap-2">
            {presetDiscounts.map((preset) => (
              <Button
                key={preset}
                variant={discountPercent === String(preset) ? "calculator-primary" : "outline"}
                size="sm"
                onClick={() => setDiscountPercent(String(preset))}
              >
                {preset}%
              </Button>
            ))}
          </div>
          <Input
            type="number"
            placeholder="Custom discount %"
            value={discountPercent}
            onChange={(e) => setDiscountPercent(e.target.value)}
          />
        </div>

        <Button onClick={reset} variant="outline" className="w-full">
          Reset
        </Button>

        {price > 0 && discount > 0 && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Original Price:</span>
              <span className="font-semibold">${price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">You Save:</span>
              <span className="font-semibold text-green-600">${discountAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="text-muted-foreground">Final Price:</span>
              <span className="font-bold text-primary text-xl">${finalPrice.toFixed(2)}</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
