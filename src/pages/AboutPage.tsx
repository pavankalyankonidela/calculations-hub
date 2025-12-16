import { Layout } from "@/components/layout/Layout";
import { Calculator, Users, Target, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About CalcHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted destination for free, accurate, and easy-to-use online calculators.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At CalcHub, we believe everyone deserves access to powerful calculation tools without 
                complexity or cost. Our mission is to simplify everyday math problems and help people 
                make informed decisions about their finances, health, and daily life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're calculating a loan EMI, tracking your BMI, figuring out a tip, or 
                converting units, we've got you covered with fast, reliable, and user-friendly calculators.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-48 h-48 rounded-full bg-primary/10 flex items-center justify-center">
                <Calculator className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Accuracy</h3>
                <p className="text-muted-foreground">
                  Every calculator is built with precision in mind. We use industry-standard formulas 
                  and regularly verify our calculations to ensure reliable results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  Our tools are designed for everyone. No sign-ups, no downloads, no fees. 
                  Just visit our site and start calculating instantly on any device.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Privacy</h3>
                <p className="text-muted-foreground">
                  Your calculations stay private. We don't store your personal data or 
                  calculation history. Your information never leaves your device.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">What We Offer</h2>
          <div className="bg-muted/50 rounded-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Financial Calculators</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Loan EMI Calculator</li>
                  <li>• SIP Calculator</li>
                  <li>• GST Calculator</li>
                  <li>• Compound Interest Calculator</li>
                  <li>• Discount Calculator</li>
                  <li>• Tip Calculator</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Health & Lifestyle</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• BMI Calculator</li>
                  <li>• Calorie Calculator</li>
                  <li>• Age Calculator</li>
                  <li>• Unit Converter</li>
                  <li>• Percentage Calculator</li>
                  <li>• Basic Calculator</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions or Suggestions?</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking to improve and add new calculators. Your feedback helps us serve you better.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
