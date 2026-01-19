import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "For individual patients",
    price: "₹0",
    period: "forever",
    features: [
      "Access prescriptions digitally",
      "Order medicines online",
      "Book lab tests",
      "Store health records",
      "Price comparison",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For doctors & clinics",
    price: "₹999",
    period: "/month",
    features: [
      "Everything in Free",
      "AI prescription suggestions",
      "Patient management",
      "Treatment analytics",
      "Direct pharmacy connect",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "For pharmacies & labs",
    price: "₹2,499",
    period: "/month",
    features: [
      "Everything in Professional",
      "Prescription routing",
      "Inventory management",
      "Order fulfillment tools",
      "Analytics dashboard",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
  {
    name: "Enterprise",
    description: "For pharma companies",
    price: "Custom",
    period: "",
    features: [
      "Everything in Business",
      "Verified prescriber access",
      "Custom integrations",
      "Advanced analytics",
      "Compliance tools",
      "White-label options",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-highlight/10 text-highlight text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that fits your needs. Start free, upgrade when you're ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card rounded-2xl p-8 shadow-sm border ${
                  plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-white text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-heading font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${plan.popular ? "gradient-primary border-0" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-4">
            {[
              {
                q: "Is the patient app really free?",
                a: "Yes! Patients can access their prescriptions, order medicines, book tests, and manage health records completely free.",
              },
              {
                q: "Can I try before subscribing?",
                a: "Absolutely. All paid plans come with a 14-day free trial. No credit card required.",
              },
              {
                q: "How does billing work?",
                a: "Plans are billed monthly. You can cancel anytime. Annual plans get 2 months free.",
              },
              {
                q: "Do you offer discounts for NGOs?",
                a: "Yes, we offer special pricing for healthcare NGOs and rural health initiatives. Contact us for details.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
