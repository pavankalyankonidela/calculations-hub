import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Delete, Divide, Minus, Plus, X, Equal } from "lucide-react";

export function BasicCalculator() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const backspace = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const previousVal = parseFloat(previousValue);
      let result = 0;

      switch (operation) {
        case "+":
          result = previousVal + inputValue;
          break;
        case "-":
          result = previousVal - inputValue;
          break;
        case "*":
          result = previousVal * inputValue;
          break;
        case "/":
          result = previousVal / inputValue;
          break;
        default:
          result = inputValue;
      }

      setDisplay(String(result));
      setPreviousValue(String(result));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = () => {
    if (!operation || previousValue === null) return;

    const inputValue = parseFloat(display);
    const previousVal = parseFloat(previousValue);
    let result = 0;

    switch (operation) {
      case "+":
        result = previousVal + inputValue;
        break;
      case "-":
        result = previousVal - inputValue;
        break;
      case "*":
        result = previousVal * inputValue;
        break;
      case "/":
        result = previousVal / inputValue;
        break;
      default:
        return;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  };

  const toggleSign = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const percentage = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  return (
    <div className="bg-card rounded-2xl border border-border shadow-lg p-6 max-w-sm mx-auto">
      {/* Display */}
      <div className="calculator-display mb-6 min-h-[4rem] flex items-center justify-end overflow-hidden">
        <span className="truncate">{display}</span>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <Button variant="secondary" className="h-14 text-lg" onClick={clear}>
          AC
        </Button>
        <Button variant="secondary" className="h-14 text-lg" onClick={toggleSign}>
          +/-
        </Button>
        <Button variant="secondary" className="h-14 text-lg" onClick={percentage}>
          %
        </Button>
        <Button variant="calculator-operator" className="h-14" onClick={() => performOperation("/")}>
          <Divide className="h-5 w-5" />
        </Button>

        {/* Row 2 */}
        <Button variant="calculator" onClick={() => inputDigit("7")}>7</Button>
        <Button variant="calculator" onClick={() => inputDigit("8")}>8</Button>
        <Button variant="calculator" onClick={() => inputDigit("9")}>9</Button>
        <Button variant="calculator-operator" className="h-14" onClick={() => performOperation("*")}>
          <X className="h-5 w-5" />
        </Button>

        {/* Row 3 */}
        <Button variant="calculator" onClick={() => inputDigit("4")}>4</Button>
        <Button variant="calculator" onClick={() => inputDigit("5")}>5</Button>
        <Button variant="calculator" onClick={() => inputDigit("6")}>6</Button>
        <Button variant="calculator-operator" className="h-14" onClick={() => performOperation("-")}>
          <Minus className="h-5 w-5" />
        </Button>

        {/* Row 4 */}
        <Button variant="calculator" onClick={() => inputDigit("1")}>1</Button>
        <Button variant="calculator" onClick={() => inputDigit("2")}>2</Button>
        <Button variant="calculator" onClick={() => inputDigit("3")}>3</Button>
        <Button variant="calculator-operator" className="h-14" onClick={() => performOperation("+")}>
          <Plus className="h-5 w-5" />
        </Button>

        {/* Row 5 */}
        <Button variant="calculator" className="col-span-1" onClick={() => inputDigit("0")}>
          0
        </Button>
        <Button variant="calculator" onClick={inputDecimal}>.</Button>
        <Button variant="secondary" className="h-14" onClick={backspace}>
          <Delete className="h-5 w-5" />
        </Button>
        <Button variant="calculator-primary" className="h-14" onClick={calculate}>
          <Equal className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
