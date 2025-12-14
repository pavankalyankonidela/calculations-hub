import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const lengthUnits = {
  meter: 1,
  kilometer: 0.001,
  centimeter: 100,
  millimeter: 1000,
  mile: 0.000621371,
  yard: 1.09361,
  foot: 3.28084,
  inch: 39.3701,
};

const weightUnits = {
  kilogram: 1,
  gram: 1000,
  milligram: 1000000,
  pound: 2.20462,
  ounce: 35.274,
  ton: 0.001,
};

const temperatureConvert = (value: number, from: string, to: string): number => {
  let celsius: number;
  
  if (from === "celsius") celsius = value;
  else if (from === "fahrenheit") celsius = (value - 32) * 5/9;
  else celsius = value - 273.15;
  
  if (to === "celsius") return celsius;
  else if (to === "fahrenheit") return celsius * 9/5 + 32;
  else return celsius + 273.15;
};

function LengthConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("foot");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    const inMeters = num / lengthUnits[fromUnit as keyof typeof lengthUnits];
    const result = inMeters * lengthUnits[toUnit as keyof typeof lengthUnits];
    return result.toFixed(4);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>From</Label>
          <Select value={fromUnit} onValueChange={setFromUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(lengthUnits).map((unit) => (
                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>To</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(lengthUnits).map((unit) => (
                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Value</Label>
        <Input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {value && (
        <div className="p-4 bg-primary/10 rounded-lg text-center">
          <span className="text-lg">{value} {fromUnit} = </span>
          <span className="font-bold text-primary text-xl">{convert()} {toUnit}</span>
        </div>
      )}
    </div>
  );
}

function WeightConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("kilogram");
  const [toUnit, setToUnit] = useState("pound");

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    const inKg = num / weightUnits[fromUnit as keyof typeof weightUnits];
    const result = inKg * weightUnits[toUnit as keyof typeof weightUnits];
    return result.toFixed(4);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>From</Label>
          <Select value={fromUnit} onValueChange={setFromUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(weightUnits).map((unit) => (
                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>To</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(weightUnits).map((unit) => (
                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Value</Label>
        <Input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {value && (
        <div className="p-4 bg-primary/10 rounded-lg text-center">
          <span className="text-lg">{value} {fromUnit} = </span>
          <span className="font-bold text-primary text-xl">{convert()} {toUnit}</span>
        </div>
      )}
    </div>
  );
}

function TemperatureConverter() {
  const [value, setValue] = useState("");
  const [fromUnit, setFromUnit] = useState("celsius");
  const [toUnit, setToUnit] = useState("fahrenheit");

  const tempUnits = ["celsius", "fahrenheit", "kelvin"];

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return "";
    return temperatureConvert(num, fromUnit, toUnit).toFixed(2);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>From</Label>
          <Select value={fromUnit} onValueChange={setFromUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {tempUnits.map((unit) => (
                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>To</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {tempUnits.map((unit) => (
                <SelectItem key={unit} value={unit}>{unit}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label>Value</Label>
        <Input
          type="number"
          placeholder="Enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      {value && (
        <div className="p-4 bg-primary/10 rounded-lg text-center">
          <span className="text-lg">{value}° {fromUnit} = </span>
          <span className="font-bold text-primary text-xl">{convert()}° {toUnit}</span>
        </div>
      )}
    </div>
  );
}

export function UnitConverter() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Unit Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="length" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="length">Length</TabsTrigger>
            <TabsTrigger value="weight">Weight</TabsTrigger>
            <TabsTrigger value="temperature">Temp</TabsTrigger>
          </TabsList>
          <TabsContent value="length" className="mt-4">
            <LengthConverter />
          </TabsContent>
          <TabsContent value="weight" className="mt-4">
            <WeightConverter />
          </TabsContent>
          <TabsContent value="temperature" className="mt-4">
            <TemperatureConverter />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
