import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BasicCalculatorPage from "./pages/calculators/BasicCalculatorPage";
import BMICalculatorPage from "./pages/calculators/BMICalculatorPage";
import PercentageCalculatorPage from "./pages/calculators/PercentageCalculatorPage";
import AgeCalculatorPage from "./pages/calculators/AgeCalculatorPage";
import LoanEMICalculatorPage from "./pages/calculators/LoanEMICalculatorPage";
import TipCalculatorPage from "./pages/calculators/TipCalculatorPage";
import DiscountCalculatorPage from "./pages/calculators/DiscountCalculatorPage";
import UnitConverterPage from "./pages/calculators/UnitConverterPage";
import SIPCalculatorPage from "./pages/calculators/SIPCalculatorPage";
import GSTCalculatorPage from "./pages/calculators/GSTCalculatorPage";
import CompoundInterestCalculatorPage from "./pages/calculators/CompoundInterestCalculatorPage";
import CalorieCalculatorPage from "./pages/calculators/CalorieCalculatorPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/calculator/basic" element={<BasicCalculatorPage />} />
          <Route path="/calculator/bmi" element={<BMICalculatorPage />} />
          <Route path="/calculator/percentage" element={<PercentageCalculatorPage />} />
          <Route path="/calculator/age" element={<AgeCalculatorPage />} />
          <Route path="/calculator/loan-emi" element={<LoanEMICalculatorPage />} />
          <Route path="/calculator/tip" element={<TipCalculatorPage />} />
          <Route path="/calculator/discount" element={<DiscountCalculatorPage />} />
          <Route path="/calculator/unit-converter" element={<UnitConverterPage />} />
          <Route path="/calculator/sip" element={<SIPCalculatorPage />} />
          <Route path="/calculator/gst" element={<GSTCalculatorPage />} />
          <Route path="/calculator/compound-interest" element={<CompoundInterestCalculatorPage />} />
          <Route path="/calculator/calorie" element={<CalorieCalculatorPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
