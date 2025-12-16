import { Layout } from "@/components/layout/Layout";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="container py-12 md:py-20 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
          Privacy Policy
        </h1>
        
        <p className="text-muted-foreground mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to CalcHub ("we," "our," or "us"). We are committed to protecting your privacy 
              and ensuring you have a positive experience on our website. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you visit our website 
              calchub.com (the "Site").
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Information You Provide</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              CalcHub is designed to work without requiring any personal information. All calculations 
              are performed locally in your browser, and we do not collect, store, or transmit your 
              calculation inputs or results.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed">
              When you visit our Site, we may automatically collect certain information about your device, 
              including information about your web browser, IP address, time zone, and some of the cookies 
              that are installed on your device. This information is used for analytics purposes to improve 
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Use of Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our Site and hold 
              certain information. Cookies are files with a small amount of data which may include an 
              anonymous unique identifier. You can instruct your browser to refuse all cookies or to 
              indicate when a cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
            <h3 className="text-xl font-semibold text-foreground mb-2">Analytics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use third-party service providers to monitor and analyze the use of our Site. 
              These services may collect information sent by your browser as part of a web page request, 
              such as cookies or your IP address.
            </p>
            <h3 className="text-xl font-semibold text-foreground mb-2">Advertising</h3>
            <p className="text-muted-foreground leading-relaxed">
              We may use third-party advertising companies to serve ads when you visit our Site. 
              These companies may use information about your visits to this and other websites in 
              order to provide advertisements about goods and services of interest to you. If you 
              would like more information about this practice or to opt out of having this information 
              used by these companies, please visit the Network Advertising Initiative's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed 
              to protect the security of any personal information we process. However, please also 
              remember that we cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on your location, you may have certain rights regarding your personal information, 
              including the right to access, correct, or delete your data. Since we do not store personal 
              calculation data, these rights primarily apply to any analytics data that may be collected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our Site is not intended for children under 13 years of age. We do not knowingly collect 
              personal information from children under 13. If you are a parent or guardian and you are 
              aware that your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date at the 
              top of this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>By visiting our Contact page: <a href="/contact" className="text-primary hover:underline">/contact</a></li>
              <li>By email: privacy@calchub.com</li>
            </ul>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
