import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-heading font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: January 19, 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">1. Introduction</h2>
                <p className="text-muted-foreground">
                  Auooshadh ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Health information (prescriptions, medical history, test reports)</li>
                  <li>Account credentials</li>
                  <li>Transaction and billing information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Connect you with healthcare providers, pharmacies, and labs</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement enterprise-grade security measures to protect your personal information. All data is encrypted in transit and at rest. We regularly audit our security practices and comply with healthcare data protection standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, correct, or delete your personal information. You can also request a copy of your data or ask us to restrict processing. Contact us at privacy@auooshadh.com for any privacy-related requests.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us at:<br />
                  Email: privacy@auooshadh.com<br />
                  Phone: +91 9999 999 999
                </p>
              </section>

              <div className="bg-muted/50 rounded-xl p-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Demo Notice:</strong> This is a demonstration website. In production, this privacy policy would include comprehensive legal terms reviewed by healthcare compliance experts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
