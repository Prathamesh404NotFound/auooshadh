import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <Layout>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Last updated: January 19, 2026
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing or using the Auooshadh platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground">
                  Auooshadh provides a digital healthcare platform that connects doctors, patients, pharmacies, diagnostic labs, and pharmaceutical companies. Our services include digital prescriptions, medicine ordering, lab bookings, and health record management.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground mb-4">To use certain features, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">4. Healthcare Disclaimer</h2>
                <p className="text-muted-foreground">
                  Auooshadh is a technology platform and does not provide medical advice. Always consult with qualified healthcare professionals for medical decisions. We are not responsible for any health outcomes resulting from information provided on our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content, features, and functionality on Auooshadh are owned by us and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Auooshadh shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-heading font-semibold mb-4">8. Contact</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms, contact us at:<br />
                  Email: legal@auooshadh.com<br />
                  Phone: +91 9999 999 999
                </p>
              </section>

              <div className="bg-muted/50 rounded-xl p-6 mt-8">
                <p className="text-sm text-muted-foreground">
                  <strong>Demo Notice:</strong> This is a demonstration website. In production, these terms would include comprehensive legal provisions reviewed by legal counsel.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
