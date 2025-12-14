import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours, differenceInSeconds, format } from "date-fns";

interface AgeResult {
  years: number;
  months: number;
  weeks: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  totalHours: number;
  totalSeconds: number;
  nextBirthday: string;
  daysUntilBirthday: number;
  targetDate?: string;
}

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState("");
  const [useTargetDate, setUseTargetDate] = useState(false);
  const [result, setResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const referenceDate = useTargetDate && targetDate ? new Date(targetDate) : new Date();

    if (birth > referenceDate) return;

    const years = differenceInYears(referenceDate, birth);
    
    const afterYears = new Date(birth);
    afterYears.setFullYear(birth.getFullYear() + years);
    const months = differenceInMonths(referenceDate, afterYears);
    
    const afterMonths = new Date(afterYears);
    afterMonths.setMonth(afterYears.getMonth() + months);
    
    const weeks = differenceInWeeks(referenceDate, afterMonths);
    
    const afterWeeks = new Date(afterMonths);
    afterWeeks.setDate(afterMonths.getDate() + weeks * 7);
    const days = differenceInDays(referenceDate, afterWeeks);

    // Total values
    const totalDays = differenceInDays(referenceDate, birth);
    const totalWeeks = differenceInWeeks(referenceDate, birth);
    const totalHours = differenceInHours(referenceDate, birth);
    const totalSeconds = differenceInSeconds(referenceDate, birth);

    // Calculate next birthday from reference date
    const nextBirthday = new Date(birth);
    nextBirthday.setFullYear(referenceDate.getFullYear());
    if (nextBirthday < referenceDate) {
      nextBirthday.setFullYear(referenceDate.getFullYear() + 1);
    }
    const daysUntilBirthday = differenceInDays(nextBirthday, referenceDate);

    setResult({
      years,
      months,
      weeks,
      days,
      totalDays,
      totalWeeks,
      totalHours,
      totalSeconds,
      nextBirthday: format(nextBirthday, "MMMM d, yyyy"),
      daysUntilBirthday,
      targetDate: useTargetDate && targetDate ? format(new Date(targetDate), "MMMM d, yyyy") : undefined,
    });
  };

  const clear = () => {
    setBirthDate("");
    setTargetDate("");
    setResult(null);
  };

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="bg-card rounded-2xl border border-border shadow-lg p-6 max-w-md mx-auto">
      {/* Birth Date Input */}
      <div className="mb-4">
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

      {/* Age At Specific Date Toggle */}
      <div className="flex items-center justify-between mb-4 p-3 bg-secondary rounded-lg">
        <Label htmlFor="useTargetDate" className="text-sm font-medium text-foreground cursor-pointer">
          Calculate age at specific date
        </Label>
        <Switch
          id="useTargetDate"
          checked={useTargetDate}
          onCheckedChange={setUseTargetDate}
        />
      </div>

      {/* Target Date Input */}
      {useTargetDate && (
        <div className="mb-4 animate-fade-in">
          <Label htmlFor="targetDate" className="text-sm font-medium text-foreground mb-2 block">
            Age At Date
          </Label>
          <input
            id="targetDate"
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className="calculator-input"
          />
        </div>
      )}

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
          {/* Target Date Info */}
          {result.targetDate && (
            <div className="bg-primary/10 rounded-xl p-3 text-center">
              <div className="text-sm text-muted-foreground">Age on</div>
              <div className="text-lg font-semibold text-primary">{result.targetDate}</div>
            </div>
          )}

          {/* Main Age */}
          <div className="bg-secondary rounded-xl p-6">
            <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">
              {result.targetDate ? "Age at that date" : "Your Age"}
            </h3>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{result.years}</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{result.months}</div>
                <div className="text-xs text-muted-foreground">Months</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{result.weeks}</div>
                <div className="text-xs text-muted-foreground">Weeks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{result.days}</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
            </div>
          </div>

          {/* Total Stats */}
          <div className="bg-secondary rounded-xl p-4">
            <h3 className="text-sm font-medium text-muted-foreground mb-3 text-center">Total Time Lived</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-foreground">{formatNumber(result.totalDays)}</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
              <div className="bg-card rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-foreground">{formatNumber(result.totalWeeks)}</div>
                <div className="text-xs text-muted-foreground">Weeks</div>
              </div>
              <div className="bg-card rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-foreground">{formatNumber(result.totalHours)}</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="bg-card rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-foreground">{formatNumber(result.totalSeconds)}</div>
                <div className="text-xs text-muted-foreground">Seconds</div>
              </div>
            </div>
          </div>

          {/* Birthday Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-accent/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">{result.daysUntilBirthday}</div>
              <div className="text-xs text-muted-foreground">Days Until Birthday</div>
            </div>
            <div className="bg-accent/50 rounded-xl p-4 text-center">
              <div className="text-sm font-semibold text-foreground">{result.nextBirthday}</div>
              <div className="text-xs text-muted-foreground">Next Birthday</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
