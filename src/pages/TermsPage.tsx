import { Layout } from "@/components/layout/Layout";

const TermsPage = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Terms of Service
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using CalcHub ("the Site"), you accept and agree to be bound by the terms 
              and provisions of this agreement. If you do not agree to these terms, you should not use 
              this Site. We reserve the right to modify these terms at any time, and such modifications 
              shall be effective immediately upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              CalcHub provides free online calculators and tools for various purposes including but not 
              limited to financial calculations, health metrics, unit conversions, and general mathematics. 
              These tools are provided for informational and educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The calculators and information provided on this Site are for general informational purposes 
              only. While we strive for accuracy, we make no warranties or representations about the 
              accuracy, reliability, completeness, or timeliness of the content.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              THE SITE AND ALL INFORMATION, CONTENT, AND SERVICES PROVIDED ON THE SITE ARE PROVIDED 
              "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
              TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR 
              NON-INFRINGEMENT.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Not Professional Advice</h2>
            <p className="text-muted-foreground leading-relaxed">
              The calculators and information on this Site do not constitute professional financial, 
              medical, legal, or other advice. For decisions affecting your finances, health, or legal 
              matters, please consult with qualified professionals. EMI calculations are estimates and 
              actual loan terms may vary. BMI calculations are screening tools and not diagnostic 
              instruments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall CalcHub, its operators, or affiliates be liable for any direct, indirect, 
              incidental, special, consequential, or punitive damages arising out of your access to or 
              use of the Site or any information provided on the Site. This includes any errors or 
              omissions in any content, or any loss or damage incurred as a result of the use of any 
              content posted, transmitted, or otherwise made available via the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. User Conduct</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use the Site only for lawful purposes and in a way that does not infringe 
              the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. 
              Prohibited behavior includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Attempting to gain unauthorized access to the Site or its systems</li>
              <li>Using the Site to transmit any harmful code or malware</li>
              <li>Engaging in any activity that disrupts or interferes with the Site</li>
              <li>Using automated systems to access the Site without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this Site, including but not limited to text, graphics, logos, icons, 
              images, and software, is the property of CalcHub or its content suppliers and is protected 
              by international copyright laws. You may not reproduce, distribute, modify, or create 
              derivative works from any content on this Site without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Site may contain links to third-party websites or services that are not owned or 
              controlled by CalcHub. We have no control over, and assume no responsibility for, the 
              content, privacy policies, or practices of any third-party websites or services. You 
              acknowledge and agree that CalcHub shall not be responsible or liable for any damage or 
              loss caused by the use of any such content, goods, or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">9. Advertising</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Site may display advertisements provided by third-party advertising networks. These 
              advertisements may use cookies and similar technologies. The presence of advertisements 
              on the Site does not constitute an endorsement of the advertised products or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">10. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to indemnify, defend, and hold harmless CalcHub, its operators, affiliates, 
              and their respective officers, directors, employees, and agents from and against any 
              claims, liabilities, damages, losses, and expenses arising out of or in any way connected 
              with your access to or use of the Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">11. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, 
              without regard to conflict of law principles. Any disputes arising under these Terms 
              shall be subject to the exclusive jurisdiction of the courts in the applicable jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. 
              If a revision is material, we will provide at least 30 days' notice prior to any new terms 
              taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms, please contact us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>By visiting our Contact page: <a href="/contact" className="text-primary hover:underline">/contact</a></li>
              <li>By email: legal@calchub.com</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;
