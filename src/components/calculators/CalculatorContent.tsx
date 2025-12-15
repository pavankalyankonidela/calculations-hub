import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, BookOpen, History, Calculator, HelpCircle } from "lucide-react";
import { CalculatorContentData } from "@/data/calculatorContent";
import { AdBannerInContent } from "@/components/ads/AdBanner";

interface CalculatorContentProps {
  content: CalculatorContentData;
  calculatorName: string;
}

export function CalculatorContent({ content, calculatorName }: CalculatorContentProps) {
  return (
    <div className="mt-12 space-y-10">
      {/* How to Use Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          How to Use the {calculatorName}
        </h2>
        <Card>
          <CardContent className="pt-6">
            <ol className="space-y-3">
              {content.howToUse.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      {/* About Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Calculator className="h-6 w-6 text-primary" />
          About This Calculator
        </h2>
        <p className="text-muted-foreground leading-relaxed">{content.about}</p>
      </section>

      {/* Ad Placement */}
      <AdBannerInContent className="my-8" />

      {/* History Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <History className="h-6 w-6 text-primary" />
          History & Background
        </h2>
        <p className="text-muted-foreground leading-relaxed">{content.history}</p>
      </section>

      {/* Formula Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">
          The Science Behind the Calculation
        </h2>
        <Card className="bg-muted/50">
          <CardContent className="pt-6">
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {content.formula}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <HelpCircle className="h-6 w-6 text-primary" />
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {content.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Ad Placement */}
      <AdBannerInContent className="my-8" />

      {/* Fun Facts Section */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-primary" />
          Did You Know?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {content.funFacts.map((fact, index) => (
            <Card key={index} className="bg-primary/5 border-primary/20">
              <CardContent className="pt-4 pb-4">
                <p className="text-sm text-muted-foreground">{fact}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
