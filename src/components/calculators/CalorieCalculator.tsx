import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CalorieCalculator() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("1.55");
  const [result, setResult] = useState<{
    bmr: number;
    maintenance: number;
    weightLoss: number;
    weightGain: number;
  } | null>(null);

  const activityLevels = [
    { value: "1.2", label: "Sedentary (little or no exercise)" },
    { value: "1.375", label: "Lightly Active (1-3 days/week)" },
    { value: "1.55", label: "Moderately Active (3-5 days/week)" },
    { value: "1.725", label: "Very Active (6-7 days/week)" },
    { value: "1.9", label: "Extra Active (very hard exercise)" }
  ];

  const calculate = () => {
    const ageNum = parseFloat(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);
    const activity = parseFloat(activityLevel);

    if (ageNum > 0 && weightNum > 0 && heightNum > 0) {
      let bmr: number;
      
      // Mifflin-St Jeor Equation
      if (gender === "male") {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
      } else {
        bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
      }

      const maintenance = bmr * activity;
      const weightLoss = maintenance - 500;
      const weightGain = maintenance + 500;

      setResult({
        bmr: Math.round(bmr),
        maintenance: Math.round(maintenance),
        weightLoss: Math.round(weightLoss),
        weightGain: Math.round(weightGain)
      });
    }
  };

  const reset = () => {
    setAge("");
    setGender("male");
    setWeight("");
    setHeight("");
    setActivityLevel("1.55");
    setResult(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Calorie Calculator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="e.g., 25"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Gender</Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input
                id="weight"
                type="number"
                placeholder="e.g., 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g., 175"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Activity Level</Label>
            <Select value={activityLevel} onValueChange={setActivityLevel}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {activityLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-3">
          <Button onClick={calculate} className="flex-1">
            Calculate Calories
          </Button>
          <Button variant="outline" onClick={reset}>
            Reset
          </Button>
        </div>

        {result && (
          <div className="space-y-4 pt-4 border-t">
            <div className="bg-muted/50 p-4 rounded-lg text-center">
              <p className="text-sm text-muted-foreground mb-1">Basal Metabolic Rate (BMR)</p>
              <p className="text-xl font-bold text-foreground">
                {result.bmr.toLocaleString()} calories/day
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Calories burned at complete rest
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-red-500/10 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Weight Loss</p>
                <p className="text-lg font-bold text-red-600">
                  {result.weightLoss.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">cal/day</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Maintenance</p>
                <p className="text-lg font-bold text-primary">
                  {result.maintenance.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">cal/day</p>
              </div>
              <div className="bg-green-500/10 p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-1">Weight Gain</p>
                <p className="text-lg font-bold text-green-600">
                  {result.weightGain.toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground">cal/day</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
