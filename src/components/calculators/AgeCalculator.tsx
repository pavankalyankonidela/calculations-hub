import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { differenceInYears, differenceInMonths, differenceInDays, format } from "date-fns";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  nextBirthday: string;
  daysUntilBirthday: number;
}

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) return;

    const years = differenceInYears(today, birth);
    
    const afterYears = new Date(birth);
    afterYears.setFullYear(birth.getFullYear() + years);
    const months = differenceInMonths(today, afterYears);
    
    const afterMonths = new Date(afterYears);
    afterMonths.setMonth(afterYears.getMonth() + months);
    const days = differenceInDays(today, afterMonths);

    const totalDays = differenceInDays(today, birth);

    // Calculate next birthday
    const nextBirthday = new Date(birth);
    nextBirthday.setFullYear(today.getFullYear());
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const daysUntilBirthday = differenceInDays(nextBirthday, today);

    setResult({
      years,
      months,
      days,
      totalDays,
      nextBirthday: format(nextBirthday, "MMMM d, yyyy"),
      daysUntilBirthday,
    });
  };

  const clear = () => {
    setBirthDate("");
    setResult(null);
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-lg p-6 max-w-md mx-auto">
      {/* Input */}
      <div className="mb-6">
        <Label htmlFor="birthDate" className="text-sm font-medium text-foreground mb-2 block">
          Date of Birth
        </Label>
        <input
          id="birthDate"
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="calculator-input"
          max={format(new Date(), "yyyy-MM-dd")}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <Button variant="secondary" className="flex-1" onClick={clear}>
          Clear
        </Button>
        <Button variant="default" className="flex-1" onClick={calculateAge}>
          Calculate Age
        </Button>
      </div>

      {/* Result */}
      {result && (
        <div className="space-y-4 animate-scale-in">
          {/* Main Age */}
          <div className="bg-secondary rounded-xl p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">Your Age</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-foreground">{result.years}</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{result.months}</div>
                <div className="text-sm text-muted-foreground">Months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-foreground">{result.days}</div>
                <div className="text-sm text-muted-foreground">Days</div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{result.totalDays.toLocaleString()}</div>
              <div className="text-sm text-muted-foreground">Total Days Lived</div>
            </div>
            <div className="bg-secondary rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">{result.daysUntilBirthday}</div>
              <div className="text-sm text-muted-foreground">Days Until Birthday</div>
            </div>
          </div>

          <div className="bg-accent/50 rounded-xl p-4 text-center">
            <div className="text-sm text-muted-foreground">Next Birthday</div>
            <div className="text-lg font-semibold text-foreground">{result.nextBirthday}</div>
          </div>
        </div>
      )}
    </div>
  );
}
